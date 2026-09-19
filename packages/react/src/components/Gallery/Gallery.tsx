import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { IconCamera } from '../../icons';

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
  subtitle?: React.ReactNode;
  category?: string;
  badge?: React.ReactNode;
  fallbackIcon?: React.ReactNode;
  footer?: React.ReactNode;
  onSelect?: () => void;
  aspectRatio?: string;
  image?: React.ReactNode;
}

export const GalleryItem = forwardRef<HTMLDivElement, GalleryItemProps>(
  (
    {
      title,
      subtitle,
      description,
      imageUrl,
      imageNode,
      category,
      badge,
      fallbackIcon = <IconCamera size={28} />,
      footer,
      onSelect,
      aspectRatio,
      image,
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
        role={props.role || 'article'}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e as unknown as React.MouseEvent<HTMLDivElement>);
          }
        }}
        aria-label={typeof title === 'string' ? title : undefined}
        className={cn('fj-gallery-item', className)}
        {...props}
      >
        <div className="fj-gallery-item__media" style={aspectRatio ? { aspectRatio } : undefined}>
          {image || imageNode ? (
            image || imageNode
          ) : imageUrl ? (
            <img
              className="fj-gallery-item__img"
              src={imageUrl}
              alt={typeof title === 'string' ? title : 'Gallery item'}
            />
          ) : (
            fallbackIcon
          )}
          <div className="fj-gallery-item__gloss-overlay" aria-hidden="true" />
          {badge && <div className="fj-gallery-item__badge">{badge}</div>}
        </div>
        <div className="fj-gallery-item__body">
          {(subtitle || category) && (
            <div className="fj-gallery-item__category">{subtitle || category}</div>
          )}
          <div className="fj-gallery-item__title">{title}</div>
          {description && <div className="fj-gallery-item__description">{description}</div>}
          {footer && <div className="fj-gallery-item__footer">{footer}</div>}
        </div>
      </div>
    );
  }
);
GalleryItem.displayName = 'GalleryItem';
