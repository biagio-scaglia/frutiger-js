import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, id, label, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <label htmlFor={inputId} className="fj-radio-label">
        <input
          ref={ref}
          type="radio"
          id={inputId}
          disabled={disabled}
          className={cn('fj-radio', className)}
          {...props}
        />
        {label && <span>{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
