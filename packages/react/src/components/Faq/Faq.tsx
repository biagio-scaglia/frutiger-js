import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { IconChevronDown } from '../../icons';

export interface FaqListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FaqList = forwardRef<HTMLDivElement, FaqListProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('fj-faq-list', className)} {...props}>
        {children}
      </div>
    );
  }
);
FaqList.displayName = 'FaqList';

export interface FaqItemProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  question: React.ReactNode;
  icon?: React.ReactNode;
}

export const FaqItem = forwardRef<HTMLDetailsElement, FaqItemProps>(
  ({ question, icon, children, className, ...props }, ref) => {
    return (
      <details ref={ref} className={cn('fj-faq-card', className)} {...props}>
        <summary className="fj-faq-card__summary">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {icon && <span>{icon}</span>}
            <span>{question}</span>
          </span>
          <span className="fj-faq-card__icon">
            <IconChevronDown size={16} />
          </span>
        </summary>
        <div className="fj-faq-card__content">{children}</div>
      </details>
    );
  }
);
FaqItem.displayName = 'FaqItem';
