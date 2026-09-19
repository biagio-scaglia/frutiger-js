import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface GalleryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: string;
  cols?: number;
  minWidth?: string;
  gap?: string;
}

export const GalleryGrid = forwardRef<HTMLDivElement, GalleryGridProps>(
  ({ children, className, columns, cols, minWidth, gap, style, ...props }, ref) => {
    const gridCols =
      columns ||
      (cols && minWidth
        ? `repeat(auto-fit, minmax(min(100%, ${minWidth}), 1fr))`
        : cols
          ? `repeat(${cols}, minmax(0, 1fr))`
          : undefined);

    return (
      <div
        ref={ref}
        className={cn('fj-gallery-grid', className)}
        style={{
          gridTemplateColumns: gridCols,
          gap,
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

export interface GalleryItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  imageUrl?: string;
  imageNode?: React.ReactNode;
  category?: string;
  badge?: React.ReactNode;
  fallbackIcon?: React.ReactNode;
  footer?: React.ReactNode;
  onSelect?: () => void;
}

export const GalleryItem = forwardRef<HTMLDivElement, GalleryItemProps>(
  (
    {
      title,
      description,
      imageUrl,
      imageNode,
      category,
      badge,
      fallbackIcon = '🖼️',
      footer,
      onSelect,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      onClick?.(e);
      onSelect?.();
    };

    return (
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e as unknown as React.MouseEvent<HTMLDivElement>);
          }
        }}
        className={cn('fj-gallery-item', className)}
        {...props}
      >
        <div className="fj-gallery-item__media">
          {imageNode ? (
            imageNode
          ) : imageUrl ? (
            <img className="fj-gallery-item__img" src={imageUrl} alt={typeof title === 'string' ? title : 'Gallery item'} />
          ) : (
            fallbackIcon
          )}
          <div className="fj-gallery-item__gloss-overlay" aria-hidden="true" />
          {badge && <div className="fj-gallery-item__badge">{badge}</div>}
        </div>
        <div className="fj-gallery-item__body">
          {category && <div className="fj-gallery-item__category">{category}</div>}
          <div className="fj-gallery-item__title">{title}</div>
          {description && <div className="fj-gallery-item__description">{description}</div>}
          {footer && <div className="fj-gallery-item__footer">{footer}</div>}
        </div>
      </div>
    );
  }
);
GalleryItem.displayName = 'GalleryItem';
