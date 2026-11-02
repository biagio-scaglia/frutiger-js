import React, { forwardRef, useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';

function assignRef<T>(ref: React.ForwardedRef<T>, value: T | null) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  maxHeight?: string | number;
  maxWidth?: string | number;
  showOverflowShadows?: boolean;
}

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      children,
      className,
      style,
      maxHeight = '300px',
      maxWidth,
      showOverflowShadows = true,
      onScroll,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const [hasTopShadow, setHasTopShadow] = useState(false);
    const [hasBottomShadow, setHasBottomShadow] = useState(false);

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        internalRef.current = node;
        assignRef(ref, node);
      },
      [ref]
    );

    const checkScroll = useCallback(() => {
      const el = internalRef.current;
      if (!el || !showOverflowShadows) return;

      const isScrollable = el.scrollHeight > el.clientHeight;
      if (!isScrollable) {
        setHasTopShadow(false);
        setHasBottomShadow(false);
        return;
      }

      setHasTopShadow(el.scrollTop > 5);
      setHasBottomShadow(el.scrollTop + el.clientHeight < el.scrollHeight - 5);
    }, [showOverflowShadows]);

    useEffect(() => {
      checkScroll();
      window.addEventListener('resize', checkScroll);
      return () => window.removeEventListener('resize', checkScroll);
    }, [checkScroll, children]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      checkScroll();
      onScroll?.(e);
    };

    return (
      <div
        className={cn(
          'fj-scroll-area-wrapper',
          hasTopShadow && 'fj-scroll-area-wrapper--has-top-shadow',
          hasBottomShadow && 'fj-scroll-area-wrapper--has-bottom-shadow'
        )}
      >
        <div
          ref={setRefs}
          className={cn('fj-scroll-area fj-scrollbar-aero', className)}
          style={{
            maxHeight,
            maxWidth,
            ...style,
          }}
          onScroll={handleScroll}
          tabIndex={0}
          role="region"
          aria-label="Scrollable region"
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }
);
ScrollArea.displayName = 'ScrollArea';
