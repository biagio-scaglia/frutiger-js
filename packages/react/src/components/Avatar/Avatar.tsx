import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = '', name, size = 'md', ...props }, ref) => {
    const getInitials = (text?: string) => {
      if (!text) return '';
      const parts = text.trim().split(/\s+/);
      if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
      return (parts[0][0] + parts[1][0]).toUpperCase();
    };

    return (
      <div ref={ref} className={cn('fj-avatar', `fj-avatar--${size}`, className)} {...props}>
        {src ? (
          <img src={src} alt={alt || name || 'Avatar'} />
        ) : (
          <span>{getInitials(name || alt)}</span>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
