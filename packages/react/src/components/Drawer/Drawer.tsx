import React, { useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import { useFocusTrap } from '../../utils/useFocusTrap';

export type DrawerPlacement = 'left' | 'right' | 'bottom';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  placement?: DrawerPlacement;
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  closeOnOverlayClick?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  placement = 'right',
  title,
  children,
  footer,
  className,
  closeOnOverlayClick = true,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useFocusTrap(drawerRef, isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fj-drawer-overlay"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : 'Drawer'}
        className={cn('fj-drawer', `fj-drawer--${placement}`, className)}
      >
        <div className="fj-drawer__header">
          {title ? <h3 className="fj-drawer__title">{title}</h3> : <span aria-hidden="true" />}
          <button
            type="button"
            aria-label="Close drawer"
            className="fj-modal__close"
            onClick={onClose}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="fj-drawer__body">{children}</div>
        {footer && <div className="fj-drawer__footer">{footer}</div>}
      </div>
    </>
  );
};
