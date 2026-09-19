import React from 'react';
import { cn } from '../../utils/cn';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  isWhite?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  isWhite = false,
  className,
  ...props
}) => {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn('fj-spinner', `fj-spinner--${size}`, isWhite && 'fj-spinner--white', className)}
      {...props}
    />
  );
};

Spinner.displayName = 'Spinner';
