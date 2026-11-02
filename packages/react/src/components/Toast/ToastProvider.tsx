import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { Toast, ToastProps } from './Toast';

export type ToastPlacement =
  'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface ToastOptions extends Omit<ToastProps, 'id' | 'onClose'> {
  duration?: number;
}

export interface ToastContextType {
  toast: (options: ToastOptions) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export interface ToastProviderProps {
  children: React.ReactNode;
  placement?: ToastPlacement;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  placement = 'top-right',
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const clearTimer = useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const removeToast = useCallback(
    (id: string) => {
      clearTimer(id);
      setToasts(prev => prev.filter(t => t.id !== id));
    },
    [clearTimer]
  );

  useEffect(() => {
    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current.clear();
    };
  }, []);

  const toast = useCallback(
    ({ duration = 4000, ...options }: ToastOptions) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastProps = {
        ...options,
        id,
        onClose: removeToast,
      };

      setToasts(prev => [...prev, newToast]);

      if (duration > 0) {
        const timer = setTimeout(() => {
          timersRef.current.delete(id);
          removeToast(id);
        }, duration);
        timersRef.current.set(id, timer);
      }

      return id;
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      <div className={`fj-toast-container fj-toast-container--${placement}`}>
        {toasts.map(t => (
          <Toast key={t.id} {...t} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a <ToastProvider>');
  }
  return context;
};
