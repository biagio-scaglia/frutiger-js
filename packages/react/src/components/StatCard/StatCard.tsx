import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export type StatCardVariant = 'default' | 'aero' | 'sky' | 'grass' | 'glass';

export interface StatCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  value: React.ReactNode;
  label?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: StatCardVariant;
  trend?: string | { value: string; isPositive?: boolean };
  trendDirection?: 'up' | 'down';
}

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      value,
      label,
      title,
      subtitle,
      icon,
      variant = 'default',
      trend,
      trendDirection = 'up',
      className,
      ...props
    },
    ref
  ) => {
    const displayLabel = label || title;
    const isTrendObject = typeof trend === 'object' && trend !== null;
    const trendText = isTrendObject ? trend.value : trend;
    const isPositive = isTrendObject ? trend.isPositive !== false : trendDirection === 'up';

    return (
      <div
        ref={ref}
        className={cn(
          'fj-stat-card',
          variant !== 'default' && `fj-stat-card--${variant}`,
          className
        )}
        {...props}
      >
        {icon && <div className="fj-stat-card__icon-wrapper">{icon}</div>}
        <div className="fj-stat-card__content">
          <div className="fj-stat-card__value">{value}</div>
          {displayLabel && <div className="fj-stat-card__label">{displayLabel}</div>}
          {subtitle && (
            <div
              style={{
                fontSize: 'var(--fj-font-size-xs)',
                color: 'var(--fj-color-text-muted)',
                marginTop: '2px',
              }}
            >
              {subtitle}
            </div>
          )}
          {trendText && (
            <div
              className={cn(
                'fj-stat-card__trend',
                isPositive ? 'fj-stat-card__trend--up' : 'fj-stat-card__trend--down'
              )}
            >
              {isPositive ? '▲' : '▼'} {trendText}
            </div>
          )}
        </div>
      </div>
    );
  }
);
StatCard.displayName = 'StatCard';
