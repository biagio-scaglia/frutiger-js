import {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';
import { IconCheck, IconChevronDown } from '../../icons';

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode;
  children: ReactNode;
  align?: 'left' | 'right';
  placement?: 'bottom' | 'top';
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = 'left',
  placement = 'bottom',
  isOpen: controlledOpen,
  onOpenChange,
  className,
  style,
  ...props
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const containerRef = useRef<HTMLDivElement>(null);

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setInternalOpen(next);
      }
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, setOpen]);

  return (
    <div
      ref={containerRef}
      className={cn('fj-dropdown', isOpen && 'fj-dropdown--open', className)}
      data-state={isOpen ? 'open' : 'closed'}
      style={{
        zIndex: isOpen ? 1050 : undefined,
        ...style,
      }}
      {...props}
    >
      <div
        className="fj-dropdown__trigger"
        onClick={() => setOpen(!isOpen)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          role="menu"
          className={cn(
            'fj-dropdown__menu',
            align === 'right' ? 'fj-dropdown__menu--right' : 'fj-dropdown__menu--left',
            placement === 'top' ? 'fj-dropdown__menu--top' : 'fj-dropdown__menu--bottom'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
Dropdown.displayName = 'Dropdown';

export interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
  showCheck?: boolean;
}

export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  (
    {
      children,
      className,
      icon,
      isActive = false,
      isDisabled = false,
      showCheck = false,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        disabled={isDisabled}
        className={cn(
          'fj-dropdown__item',
          isActive && 'fj-dropdown__item--active',
          isDisabled && 'fj-dropdown__item--disabled',
          className
        )}
        onClick={e => {
          if (isDisabled) return;
          onClick?.(e);
        }}
        {...props}
      >
        <div className="fj-dropdown__item-content">
          {icon && <span className="fj-dropdown__item-icon">{icon}</span>}
          <span>{children}</span>
        </div>
        {showCheck && isActive && (
          <span className="fj-dropdown__item-check">
            <IconCheck size={14} />
          </span>
        )}
      </button>
    );
  }
);
DropdownItem.displayName = 'DropdownItem';

export interface DropdownHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DropdownHeader: React.FC<DropdownHeaderProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn('fj-dropdown__header', className)} {...props}>
    {children}
  </div>
);
DropdownHeader.displayName = 'DropdownHeader';

export const DropdownDivider: React.FC<HTMLAttributes<HTMLHRElement>> = ({
  className,
  ...props
}) => <hr className={cn('fj-dropdown__divider', className)} {...props} />;
DropdownDivider.displayName = 'DropdownDivider';

export interface DropdownSelectOption<T extends string = string> {
  value: T;
  label: string;
  icon?: ReactNode;
  description?: string;
}

export interface DropdownSelectProps<T extends string = string> {
  options: DropdownSelectOption<T>[];
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
  leftIcon?: ReactNode;
  align?: 'left' | 'right';
  placement?: 'bottom' | 'top';
  className?: string;
}

export const DropdownSelect = <T extends string = string>({
  options,
  value,
  onChange,
  placeholder = 'Select option...',
  leftIcon,
  align = 'left',
  placement = 'bottom',
  className,
}: DropdownSelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(o => o.value === value);

  return (
    <Dropdown
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      align={align}
      placement={placement}
      className={className}
      trigger={
        <button
          type="button"
          className="fj-button fj-button--glass fj-button--sm"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            borderRadius: 'var(--fj-radius-pill)',
            padding: '4px 12px',
            fontWeight: 700,
          }}
        >
          {leftIcon || (selectedOption?.icon && <span>{selectedOption.icon}</span>)}
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <IconChevronDown
            size={14}
            style={{
              transition: 'transform 0.2s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              opacity: 0.7,
            }}
          />
        </button>
      }
    >
      {options.map(opt => (
        <DropdownItem
          key={opt.value}
          icon={opt.icon}
          isActive={opt.value === value}
          showCheck
          onClick={() => {
            onChange(opt.value);
            setIsOpen(false);
          }}
        >
          {opt.label}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};
DropdownSelect.displayName = 'DropdownSelect';
