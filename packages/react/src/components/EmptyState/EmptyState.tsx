import React from 'react';
import { cn } from '../../utils/cn';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actions,
  className,
}) => {
  return (
    <div className={cn('fj-empty-state', className)}>
      {icon && <div className="fj-empty-state__icon-wrapper">{icon}</div>}
      <h3 className="fj-empty-state__title">{title}</h3>
      {description && <p className="fj-empty-state__description">{description}</p>}
      {actions && <div className="fj-empty-state__actions">{actions}</div>}
    </div>
  );
};
