import React from 'react';
import { cn } from '../../utils/cn';

export interface BreadcrumbItemData {
  label: React.ReactNode;
  href?: string;
  isActive?: boolean;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItemData[];
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  className,
  ...props
}) => {
  return (
    <nav aria-label="Breadcrumb" className={className} {...props}>
      <ol className="fj-breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1 || item.isActive;
          return (
            <li
              key={index}
              className={cn('fj-breadcrumb-item', isLast && 'fj-breadcrumb-item--active')}
            >
              {isLast || !item.href ? (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              ) : (
                <a href={item.href} className="fj-breadcrumb-link">
                  {item.label}
                </a>
              )}
              {index < items.length - 1 && (
                <span className="fj-breadcrumb-separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
