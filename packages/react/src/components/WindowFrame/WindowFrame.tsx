import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export type WindowFrameVariant = 'aero' | 'glass' | 'glossy' | 'frosted';

export interface WindowFrameProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: WindowFrameVariant;
  isActive?: boolean;
  headerActions?: React.ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  footer?: React.ReactNode;
}

export const WindowFrame = forwardRef<HTMLDivElement, WindowFrameProps>(
  (
    {
      children,
      className,
      title = 'Aero Window',
      icon,
      variant = 'aero',
      isActive = true,
      headerActions,
      onClose,
      onMinimize,
      onMaximize,
      footer,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'fj-window',
          variant !== 'aero' && `fj-window--${variant}`,
          !isActive && 'fj-window--inactive',
          className
        )}
        {...props}
      >
        <div className="fj-window__header">
          <div className="fj-window__title-group">
            {icon && <span>{icon}</span>}
            <span>{title}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {headerActions && <div>{headerActions}</div>}
            <div className="fj-window__controls">
              <button
                type="button"
                className="fj-window__btn fj-window__btn--minimize"
                aria-label="Minimize window"
                onClick={onMinimize}
              />
              <button
                type="button"
                className="fj-window__btn fj-window__btn--maximize"
                aria-label="Maximize window"
                onClick={onMaximize}
              />
              <button
                type="button"
                className="fj-window__btn fj-window__btn--close"
                aria-label="Close window"
                onClick={onClose}
              />
            </div>
          </div>
        </div>
        <div className="fj-window__body">{children}</div>
        {footer && <div className="fj-window__footer">{footer}</div>}
      </div>
    );
  }
);
WindowFrame.displayName = 'WindowFrame';
