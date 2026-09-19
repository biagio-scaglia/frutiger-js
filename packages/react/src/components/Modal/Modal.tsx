import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';
import { IconClose } from '../../icons';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  closeOnOverlayClick = true,
  closeOnEsc = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="fj-modal-overlay" onClick={handleOverlayClick} data-testid="fj-modal-overlay">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'fj-modal-title' : undefined}
        className={cn('fj-modal', className)}
      >
        {title && (
          <div className="fj-modal__header">
            <h2 id="fj-modal-title" className="fj-modal__title">
              {title}
            </h2>
            <button
              type="button"
              className="fj-modal__close"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <IconClose size={18} />
            </button>
          </div>
        )}
        <div className="fj-modal__body">{children}</div>
      </div>
    </div>,
    document.body
  );
};

Modal.displayName = 'Modal';

export const Dialog = Modal;
