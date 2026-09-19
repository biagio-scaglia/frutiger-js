import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = 'left',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', display: 'inline-block' }}
      className={className}
    >
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div
          role="menu"
          className={cn('fj-dropdown-menu')}
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            [align === 'right' ? 'right' : 'left']: 0,
            zIndex: 1000,
            minWidth: '180px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(186, 230, 253, 0.9)',
            borderRadius: 'var(--fj-radius-lg)',
            boxShadow: 'inset 0 1px 0 #fff, 0 10px 30px rgba(12, 74, 110, 0.2)',
            padding: 'var(--fj-space-2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
Dropdown.displayName = 'Dropdown';

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}
export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ children, className, icon, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        className={cn('fj-dropdown-item', className)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--fj-space-2)',
          padding: 'var(--fj-space-2) var(--fj-space-3)',
          borderRadius: 'var(--fj-radius-md)',
          fontSize: 'var(--fj-font-size-sm)',
          color: 'var(--fj-color-text)',
          textAlign: 'left',
          cursor: 'pointer',
          border: 'none',
          background: 'transparent',
          transition: 'all 0.15s ease',
        }}
        onClick={onClick}
        {...props}
      >
        {icon && <span>{icon}</span>}
        <span>{children}</span>
      </button>
    );
  }
);
DropdownItem.displayName = 'DropdownItem';
