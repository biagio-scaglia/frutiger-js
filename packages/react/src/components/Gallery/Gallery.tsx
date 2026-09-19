import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface GalleryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: string;
}

export const GalleryGrid = forwardRef<HTMLDivElement, GalleryGridProps>(
  ({ children, className, columns, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('fj-gallery-grid', className)}
        style={{
          gridTemplateColumns: columns,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GalleryGrid.displayName = 'GalleryGrid';

export interface GalleryItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  imageUrl?: string;
  category?: string;
  badge?: React.ReactNode;
  fallbackIcon?: React.ReactNode;
  onSelect?: () => void;
}

export const GalleryItem = forwardRef<HTMLDivElement, GalleryItemProps>(
  (
    { title, description, imageUrl, category, badge, fallbackIcon, onSelect, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        onClick={onSelect}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect?.();
          }
        }}
        className={cn('fj-gallery-item', className)}
        {...props}
      >
        <div className="fj-gallery-item__preview">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={typeof title === 'string' ? title : 'Gallery Item'}
              className="fj-gallery-item__img"
            />
          ) : (
            fallbackIcon || <span style={{ fontSize: '2.5rem' }}>🌐</span>
          )}
          <div className="fj-gallery-item__gloss-overlay" />
          {(category || badge) && (
            <div className="fj-gallery-item__category-badge">{category || badge}</div>
          )}
        </div>
        <div className="fj-gallery-item__meta">
          <div className="fj-gallery-item__title">{title}</div>
          {description && <div className="fj-gallery-item__description">{description}</div>}
        </div>
      </div>
    );
  }
);
GalleryItem.displayName = 'GalleryItem';
