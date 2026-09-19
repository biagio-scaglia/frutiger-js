import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rect' | 'circle' | 'pill';
  width?: string | number;
  height?: string | number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'rect', width, height, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          'fj-skeleton',
          variant === 'circle' && 'fj-skeleton--circle',
          variant === 'pill' && 'fj-skeleton--pill',
          className
        )}
        style={{
          width,
          height: height || (variant === 'circle' ? width : undefined),
          ...style,
        }}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';
