import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, size = 'xl', ...props }, ref) => {
    return (
      <div ref={ref} className={cn('fj-container', `fj-container-${size}`, className)} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
