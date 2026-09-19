import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export type StackSpacing = 'sm' | 'md' | 'lg' | 'xl';
export type StackDirection = 'row' | 'column';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: StackSpacing;
  direction?: StackDirection;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  wrap?: boolean;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      className,
      spacing = 'md',
      direction = 'column',
      align,
      justify,
      wrap = false,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'fj-stack',
          `fj-stack-${spacing}`,
          direction === 'row' && 'fj-flex-row',
          wrap && 'fj-wrap',
          className
        )}
        style={{
          alignItems: align,
          justifyContent: justify,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
