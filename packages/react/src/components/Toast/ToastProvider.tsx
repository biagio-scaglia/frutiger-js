import React, { createContext, useContext, useState, useCallback } from 'react';
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

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
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
        setTimeout(() => {
          removeToast(id);
        }, duration);
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
