import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export type ButtonVariant =
  'primary' | 'secondary' | 'success' | 'danger' | 'ghost' | 'glass' | 'aero';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isFullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      isFullWidth = false,
      disabled,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const isActuallyDisabled = disabled || isLoading;
    const isWhiteSpinner = variant !== 'glass' && variant !== 'ghost';

    return (
      <button
        ref={ref}
        type={props.type || 'button'}
        disabled={isActuallyDisabled}
        aria-disabled={isActuallyDisabled}
        aria-busy={isLoading}
        data-fj-variant={variant}
        data-fj-size={size}
        className={cn(
          'fj-button',
          `fj-button--${variant}`,
          `fj-button--${size}`,
          isFullWidth && 'fj-button--block',
          isLoading && 'fj-button--loading',
          className
        )}
        {...props}
      >
        {isLoading && (
          <span className="fj-button__spinner" aria-hidden="true">
            <span className={cn('fj-spinner fj-spinner--sm', isWhiteSpinner && 'fj-spinner--white')} />
          </span>
        )}
        <span
          className="fj-button__content"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          {leftIcon && <span className="fj-button__icon-left">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="fj-button__icon-right">{rightIcon}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
