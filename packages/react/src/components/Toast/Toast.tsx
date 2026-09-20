import React from 'react';
import { cn } from '../../utils/cn';

export type ToastVariant = 'info' | 'success' | 'warning' | 'danger';

export interface ToastProps {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  icon?: React.ReactNode;
  onClose?: (id: string) => void;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  variant = 'info',
  icon,
  onClose,
  className,
}) => {
  return (
    <div
      role={variant === 'danger' ? 'alert' : 'status'}
      aria-live={variant === 'danger' ? 'assertive' : 'polite'}
      className={cn('fj-toast', `fj-toast--${variant}`, className)}
    >
      {icon && <span className="fj-toast__icon">{icon}</span>}
      <div className="fj-toast__content">
        <h4 className="fj-toast__title">{title}</h4>
        {description && <p className="fj-toast__description">{description}</p>}
      </div>
      {onClose && (
        <button
          type="button"
          aria-label="Close notification"
          className="fj-toast__close"
          onClick={() => onClose(id)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};
