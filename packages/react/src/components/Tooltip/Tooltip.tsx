import React, { useState, useRef, useEffect, useId, cloneElement, isValidElement } from 'react';
import { cn } from '../../utils/cn';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  children: React.ReactElement;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  placement = 'top',
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 120);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const trigger = isValidElement(children)
    ? cloneElement(children as React.ReactElement<Record<string, unknown>>, {
        'aria-describedby': isVisible ? tooltipId : undefined,
      })
    : children;

  return (
    <div
      className="fj-tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {trigger}
      <div
        id={tooltipId}
        role="tooltip"
        aria-hidden={!isVisible}
        className={cn(
          'fj-tooltip',
          `fj-tooltip--${placement}`,
          isVisible && 'fj-tooltip--visible',
          className
        )}
      >
        {content}
      </div>
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
