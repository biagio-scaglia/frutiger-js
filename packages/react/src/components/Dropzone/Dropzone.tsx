import React, { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { IconCloud } from '../../icons';

export interface DropzoneProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onDrop' | 'title'
> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onFilesSelected?: (files: FileList) => void;
}

export const Dropzone = forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      className,
      title = 'Drop files here or click to browse',
      subtitle = 'Supports PNG, JPG, WebP and audio files up to 50MB',
      icon = <IconCloud size={24} />,
      accept,
      multiple = false,
      disabled = false,
      onFilesSelected,
      ...props
    },
    ref
  ) => {
    const [isDragActive, setIsDragActive] = useState(false);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) setIsDragActive(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
      if (disabled) return;
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onFilesSelected?.(e.dataTransfer.files);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        onFilesSelected?.(e.target.files);
      }
    };

    return (
      <div
        ref={ref}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-label={typeof title === 'string' ? title : 'File upload dropzone'}
        className={cn(
          'fj-dropzone',
          isDragActive && 'fj-dropzone--active',
          disabled && 'fj-dropzone--disabled',
          className
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        {...props}
      >
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          tabIndex={-1}
          className="fj-dropzone__input"
          onChange={handleInputChange}
          aria-hidden="true"
        />
        {icon && <div className="fj-dropzone__icon-wrapper">{icon}</div>}
        {title && <div className="fj-dropzone__title">{title}</div>}
        {subtitle && <div className="fj-dropzone__subtitle">{subtitle}</div>}
      </div>
    );
  }
);
Dropzone.displayName = 'Dropzone';
