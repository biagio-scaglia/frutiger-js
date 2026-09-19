import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  showValue?: boolean;
  valueFormat?: (val: number) => string;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className,
      label,
      showValue = true,
      valueFormat = (v) => `${v}%`,
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue = 50,
      onChange,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? `fj-slider-${Math.random().toString(36).substring(2, 9)}` : undefined);
    const currentValue = Number(value !== undefined ? value : defaultValue);

    return (
      <div className={cn('fj-slider', disabled && 'fj-slider--disabled', className)}>
        {(label || showValue) && (
          <div className="fj-slider__header">
            {label && (
              <label htmlFor={inputId} className="fj-slider__label">
                {label}
              </label>
            )}
            {showValue && (
              <span className="fj-slider__value" aria-hidden="true">
                {valueFormat(currentValue)}
              </span>
            )}
          </div>
        )}
        <div className="fj-slider__track-container">
          <input
            ref={ref}
            id={inputId}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            defaultValue={value === undefined ? defaultValue : undefined}
            onChange={onChange}
            disabled={disabled}
            className="fj-slider__input"
            aria-valuenow={currentValue}
            aria-valuemin={Number(min)}
            aria-valuemax={Number(max)}
            {...props}
          />
        </div>
      </div>
    );
  }
);
Slider.displayName = 'Slider';
