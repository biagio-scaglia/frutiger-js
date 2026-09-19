import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number | string;
  gap?: string;
  minChildWidth?: string;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, className, columns, gap, minChildWidth, style, ...props }, ref) => {
    let gridTemplateColumns: string | undefined;

    if (columns) {
      gridTemplateColumns = typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns;
    } else if (minChildWidth) {
      gridTemplateColumns = `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`;
    }

    return (
      <div
        ref={ref}
        className={cn('fj-grid', className)}
        style={{
          gridTemplateColumns,
          gap,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';
