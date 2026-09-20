import React from 'react';
import { cn } from '../../utils/cn';

export interface SegmentedControlOption<T extends string = string> {
  value: T;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps<T extends string = string> {
  value: T;
  onChange: (value: T) => void;
  options: SegmentedControlOption<T>[];
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  name?: string;
}

export function SegmentedControl<T extends string = string>({
  value,
  onChange,
  options,
  size = 'md',
  fullWidth = false,
  className,
}: SegmentedControlProps<T>) {
  return (
    <div
      role="radiogroup"
      className={cn(
        'fj-segmented-control',
        size !== 'md' && `fj-segmented-control--${size}`,
        fullWidth && 'fj-segmented-control--full-width',
        className
      )}
    >
      {options.map(option => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={option.disabled}
            onClick={() => !option.disabled && onChange(option.value)}
            className={cn(
              'fj-segmented-control__item',
              isSelected && 'fj-segmented-control__item--active'
            )}
          >
            {option.icon && (
              <span style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
                {option.icon}
              </span>
            )}
            <span className="fj-segmented-control__item-label">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

