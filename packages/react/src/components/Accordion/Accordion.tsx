import React, { createContext, useContext, useId, useState } from 'react';
import { cn } from '../../utils/cn';
import { IconChevronDown } from '../../icons';

interface AccordionContextValue {
  openValues: string[];
  toggleItem: (value: string) => void;
  baseId: string;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  type = 'single',
  defaultValue,
  value: controlledValue,
  onValueChange,
  ...props
}) => {
  const baseId = useId();
  const [uncontrolledValues, setUncontrolledValues] = useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const isControlled = controlledValue !== undefined;
  const openValues = isControlled
    ? Array.isArray(controlledValue)
      ? controlledValue
      : [controlledValue]
    : uncontrolledValues;

  const toggleItem = (itemValue: string) => {
    const isOpen = openValues.includes(itemValue);
    let next: string[];
    if (type === 'single') {
      next = isOpen ? [] : [itemValue];
    } else {
      next = isOpen ? openValues.filter(v => v !== itemValue) : [...openValues, itemValue];
    }

    if (!isControlled) {
      setUncontrolledValues(next);
    }

    if (type === 'single') {
      onValueChange?.(next[0] ?? '');
    } else {
      onValueChange?.(next);
    }
  };

  return (
    <AccordionContext.Provider value={{ openValues, toggleItem, baseId }}>
      <div className={cn('fj-accordion', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
  triggerId: string;
  contentId: string;
}
const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}
export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  className,
  value,
  ...props
}) => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('AccordionItem must be used within <Accordion>');

  const isOpen = ctx.openValues.includes(value);
  const triggerId = `${ctx.baseId}-trigger-${value}`;
  const contentId = `${ctx.baseId}-content-${value}`;

  return (
    <AccordionItemContext.Provider value={{ value, isOpen, triggerId, contentId }}>
      <div
        className={cn('fj-accordion-item', isOpen && 'fj-accordion-item--open', className)}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  const accordionCtx = useContext(AccordionContext);
  const itemCtx = useContext(AccordionItemContext);
  if (!accordionCtx || !itemCtx) {
    throw new Error('AccordionTrigger must be used within <AccordionItem>');
  }

  return (
    <button
      type="button"
      id={itemCtx.triggerId}
      aria-expanded={itemCtx.isOpen}
      aria-controls={itemCtx.contentId}
      className={cn('fj-accordion-trigger', className)}
      {...props}
      onClick={e => {
        accordionCtx.toggleItem(itemCtx.value);
        onClick?.(e);
      }}
    >
      <span>{children}</span>
      <span className="fj-accordion-chevron">
        <IconChevronDown size={18} />
      </span>
    </button>
  );
};

export type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;
export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
  ...props
}) => {
  const itemCtx = useContext(AccordionItemContext);
  if (!itemCtx) throw new Error('AccordionContent must be used within <AccordionItem>');

  if (!itemCtx.isOpen) return null;

  return (
    <div
      id={itemCtx.contentId}
      role="region"
      aria-labelledby={itemCtx.triggerId}
      className={cn('fj-accordion-content', className)}
      {...props}
    >
      {children}
    </div>
  );
};
