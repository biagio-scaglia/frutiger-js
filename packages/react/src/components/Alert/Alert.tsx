import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { IconInfo, IconCheck, IconAlertTriangle, IconClose } from '../../icons';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  onClose?: () => void;
  icon?: React.ReactNode;
}

const defaultIcons: Record<AlertVariant, React.ReactNode> = {
  info: <IconInfo size={20} />,
  success: <IconCheck size={20} />,
  warning: <IconAlertTriangle size={20} />,
  danger: <IconAlertTriangle size={20} />,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, className, variant = 'info', title, onClose, icon, ...props }, ref) => {
    const alertIcon = icon !== undefined ? icon : defaultIcons[variant];

    return (
      <div
        ref={ref}
        role="alert"
        data-fj-variant={variant}
        className={cn('fj-alert', `fj-alert--${variant}`, className)}
        {...props}
      >
        {alertIcon && <span className="fj-alert__icon">{alertIcon}</span>}
        <div className="fj-alert__content">
          {title && <div className="fj-alert__title">{title}</div>}
          <div>{children}</div>
        </div>
        {onClose && (
          <button
            type="button"
            className="fj-alert__close"
            onClick={onClose}
            aria-label="Close alert"
          >
            <IconClose size={16} />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
