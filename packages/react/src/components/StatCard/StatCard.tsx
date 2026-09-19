import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: React.ReactNode;
  icon?: React.ReactNode;
  trend?: string;
  trendDirection?: 'up' | 'down';
}

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  ({ value, label, icon, trend, trendDirection = 'up', className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('fj-stat-card', className)} {...props}>
        {icon && <div className="fj-stat-card__icon-wrapper">{icon}</div>}
        <div className="fj-stat-card__content">
          <div className="fj-stat-card__value">{value}</div>
          <div className="fj-stat-card__label">{label}</div>
          {trend && (
            <div
              className={cn(
                'fj-stat-card__trend',
                trendDirection === 'up' ? 'fj-stat-card__trend--up' : 'fj-stat-card__trend--down'
              )}
            >
              {trendDirection === 'up' ? '▲' : '▼'} {trend}
            </div>
          )}
        </div>
      </div>
    );
  }
);
StatCard.displayName = 'StatCard';
