import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';
import { IconChevronDown } from '../../icons';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options?: SelectOption[];
  helperText?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, id, label, error, helperText, options, children, disabled, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const isError = Boolean(error);

    return (
      <div className="fj-input-wrapper">
        {label && (
          <label htmlFor={selectId} className="fj-label">
            {label}
          </label>
        )}
        <div className="fj-select-container">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            aria-invalid={isError}
            aria-label={
              props['aria-label'] ||
              (!label && typeof props.title === 'string'
                ? props.title
                : !label
                  ? 'Select option'
                  : undefined)
            }
            aria-describedby={
              error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
            className={cn('fj-select', className)}
            {...props}
          >
            {options
              ? options.map(opt => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <span className="fj-select-arrow">
            <IconChevronDown size={16} />
          </span>
        </div>
        {error && (
          <span
            id={`${selectId}-error`}
            className="fj-helper-text fj-helper-text--error"
            role="alert"
          >
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={`${selectId}-helper`} className="fj-helper-text">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
