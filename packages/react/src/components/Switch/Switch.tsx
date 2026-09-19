import React, { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';

export interface SwitchProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onChange'
> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled,
      label,
      ...props
    },
    ref
  ) => {
    const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const isChecked = isControlled ? controlledChecked : uncontrolledChecked;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (!isControlled) {
        setUncontrolledChecked(!isChecked);
      }
      onChange?.(!isChecked);
      props.onClick?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!isControlled) {
          setUncontrolledChecked(!isChecked);
        }
        onChange?.(!isChecked);
      }
      props.onKeyDown?.(e);
    };

    return (
      <div className="fj-switch-label">
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={isChecked}
          aria-label={
            ((props as Record<string, unknown>)['aria-label'] as string) ||
            (typeof label === 'string' ? label : 'Toggle switch')
          }
          disabled={disabled}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={cn('fj-switch', isChecked && 'fj-switch--checked', className)}
          {...props}
        >
          <span className="fj-switch__thumb" />
        </button>
        {label && <span>{label}</span>}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
