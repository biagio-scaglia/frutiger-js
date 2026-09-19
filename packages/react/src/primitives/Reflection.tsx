import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../utils/cn';

export interface ReflectionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Reflection = forwardRef<HTMLDivElement, ReflectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('fj-reflection-wrap', className)} {...props}>
        <div>{children}</div>
        <div className="fj-reflection-mirror" aria-hidden="true">
          {children}
        </div>
      </div>
    );
  }
);

Reflection.displayName = 'Reflection';
