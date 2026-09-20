import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ButtonVariant } from '../Button';

export type IconButtonShape = 'circle' | 'rounded';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  'aria-label': string;
  variant?: ButtonVariant;
  size?: IconButtonSize;
  shape?: IconButtonShape;
  isLoading?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      'aria-label': ariaLabel,
      className,
      variant = 'primary',
      size = 'md',
      shape = 'circle',
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const isActuallyDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={props.type || 'button'}
        disabled={isActuallyDisabled}
        aria-disabled={isActuallyDisabled}
        aria-busy={isLoading}
        aria-label={ariaLabel}
        data-fj-variant={variant}
        data-fj-size={size}
        className={cn(
          'fj-button',
          'fj-icon-btn',
          `fj-button--${variant}`,
          `fj-icon-btn--${size}`,
          `fj-icon-btn--${shape}`,
          isLoading && 'fj-button--loading',
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="fj-spinner fj-spinner--sm fj-spinner--white" aria-hidden="true" />
        ) : (
          icon
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
