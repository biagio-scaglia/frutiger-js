import React from 'react';
import { cn } from '../../utils/cn';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  max?: number;
  variant?: 'linear' | 'circular';
  status?: 'default' | 'success';
  size?: number; // For circular progress (px)
  strokeWidth?: number; // For circular progress
  showLabel?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  variant = 'linear',
  status = 'default',
  size = 64,
  strokeWidth = 6,
  showLabel = false,
  className,
  ...props
}) => {
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

  if (variant === 'circular') {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn('fj-progress-circle', className)}
        style={{ width: size, height: size }}
        {...props}
      >
        <svg width={size} height={size}>
          <circle
            className="fj-progress-circle__track"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            className="fj-progress-circle__indicator"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        {showLabel && <span className="fj-progress-circle__label">{Math.round(percentage)}%</span>}
      </div>
    );
  }

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn('fj-progress-bar', className)}
      {...props}
    >
      <div
        className={cn('fj-progress-fill', status === 'success' && 'fj-progress-fill--success')}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

Progress.displayName = 'Progress';
