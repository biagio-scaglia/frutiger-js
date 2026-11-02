import React, { useRef } from 'react';
import { cn } from '../../utils/cn';

export interface SegmentedControlOption<T extends string = string> {
  value: T;
  label: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'glass' | 'nature' | 'water' | 'primary' | 'danger';
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
  name,
}: SegmentedControlProps<T>) {
  const groupRef = useRef<HTMLDivElement>(null);

  const enabledOptions = options.filter(option => !option.disabled);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (enabledOptions.length === 0) return;

    const currentIndex = enabledOptions.findIndex(option => option.value === value);
    let nextIndex = currentIndex;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % enabledOptions.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + enabledOptions.length) % enabledOptions.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = enabledOptions.length - 1;
    } else {
      return;
    }

    onChange(enabledOptions[nextIndex].value);
  };

  return (
    <div
      ref={groupRef}
      role="radiogroup"
      aria-label={name}
      onKeyDown={handleKeyDown}
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
            tabIndex={isSelected ? 0 : -1}
            disabled={option.disabled}
            onClick={() => !option.disabled && onChange(option.value)}
            className={cn(
              'fj-segmented-control__item',
              option.variant && `fj-segmented-control__item--${option.variant}`,
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
