import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../utils/cn';
import { IconChevronDown } from '../../icons';

interface AccordionContextValue {
  openValues: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  type = 'single',
  defaultValue,
  ...props
}) => {
  const [openValues, setOpenValues] = useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = (value: string) => {
    setOpenValues(prev => {
      const isOpen = prev.includes(value);
      if (type === 'single') {
        return isOpen ? [] : [value];
      } else {
        return isOpen ? prev.filter(v => v !== value) : [...prev, value];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ openValues, toggleItem }}>
      <div className={cn('fj-accordion', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
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

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
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
      aria-expanded={itemCtx.isOpen}
      className={cn('fj-accordion-trigger', className)}
      onClick={() => accordionCtx.toggleItem(itemCtx.value)}
      {...props}
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
    <div className={cn('fj-accordion-content', className)} {...props}>
      {children}
    </div>
  );
};
