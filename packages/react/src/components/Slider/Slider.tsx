import React, { forwardRef, useId, useState } from 'react';
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
      valueFormat = v => `${v}%`,
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
    const generatedId = useId();
    const inputId = id || (label ? generatedId : undefined);
    const isControlled = value !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState(Number(defaultValue));
    const currentValue = Number(isControlled ? value : uncontrolledValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setUncontrolledValue(Number(e.target.value));
      }
      onChange?.(e);
    };

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
            value={isControlled ? value : uncontrolledValue}
            onChange={handleChange}
            disabled={disabled}
            className="fj-slider__input"
            aria-valuenow={currentValue}
            aria-valuemin={Number(min)}
            aria-valuemax={Number(max)}
            aria-label={
              ((props as Record<string, unknown>)['aria-label'] as string) ||
              (typeof label === 'string' ? label : 'Slider')
            }
            {...props}
          />
        </div>
      </div>
    );
  }
);
Slider.displayName = 'Slider';
