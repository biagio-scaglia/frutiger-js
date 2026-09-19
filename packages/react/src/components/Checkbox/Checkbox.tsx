import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, id, label, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <label htmlFor={inputId} className="fj-checkbox-label">
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          disabled={disabled}
          aria-label={
            ((props as Record<string, unknown>)['aria-label'] as string) ||
            (typeof label === 'string' ? label : 'Checkbox')
          }
          className={cn('fj-checkbox', className)}
          {...props}
        />
        {label && <span>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
