import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, id, label, error, helperText, disabled, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const isError = Boolean(error);

    return (
      <div className="fj-input-wrapper">
        {label && (
          <label htmlFor={textareaId} className="fj-label">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          aria-invalid={isError}
          aria-label={
            props['aria-label'] || (!label && props.placeholder ? props.placeholder : undefined)
          }
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          className={cn('fj-textarea', isError && 'fj-textarea--error', className)}
          {...props}
        />
        {error && (
          <span
            id={`${textareaId}-error`}
            className="fj-helper-text fj-helper-text--error"
            role="alert"
          >
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={`${textareaId}-helper`} className="fj-helper-text">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
