import React from 'react';
import { cn } from '../../utils/cn';

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 4,
  size = 'md',
  className,
}) => {
  const childrenArray = React.Children.toArray(children);
  const visibleAvatars = max ? childrenArray.slice(0, max) : childrenArray;
  const excess = max ? childrenArray.length - max : 0;

  const excessDimensions = {
    sm: { width: '28px', height: '28px' },
    md: { width: '38px', height: '38px' },
    lg: { width: '48px', height: '48px' },
  }[size];

  return (
    <div className={cn('fj-avatar-group', className)}>
      {visibleAvatars}
      {excess > 0 && (
        <span
          className="fj-avatar-group__excess"
          style={excessDimensions}
          aria-label={`${excess} more members`}
        >
          +{excess}
        </span>
      )}
    </div>
  );
};
