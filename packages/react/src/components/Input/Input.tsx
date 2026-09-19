import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, id, label, error, success, helperText, leftIcon, rightIcon, disabled, ...props },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const isError = Boolean(error);
    const isSuccess = Boolean(success);

    return (
      <div className="fj-input-wrapper">
        {label && (
          <label htmlFor={inputId} className="fj-label">
            {label}
          </label>
        )}
        <div className="fj-input-container">
          {leftIcon && <span className="fj-input__icon-left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={isError}
            aria-label={
              props['aria-label'] || (!label && props.placeholder ? props.placeholder : undefined)
            }
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            className={cn(
              'fj-input',
              isError && 'fj-input--error',
              isSuccess && 'fj-input--success',
              Boolean(leftIcon) && 'fj-input--has-icon-left',
              Boolean(rightIcon) && 'fj-input--has-icon-right',
              className
            )}
            {...props}
          />
          {rightIcon && <span className="fj-input__icon-right">{rightIcon}</span>}
        </div>
        {error && (
          <span
            id={`${inputId}-error`}
            className="fj-helper-text fj-helper-text--error"
            role="alert"
          >
            {error}
          </span>
        )}
        {!error && success && (
          <span className="fj-helper-text fj-helper-text--success">{success}</span>
        )}
        {!error && !success && helperText && (
          <span id={`${inputId}-helper`} className="fj-helper-text">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
