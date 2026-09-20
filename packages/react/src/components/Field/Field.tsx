import React from 'react';
import { cn } from '../../utils/cn';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Field: React.FC<FieldProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('fj-field', className)} {...props}>
      {children}
    </div>
  );
};

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  isRequired,
  className,
  ...props
}) => {
  return (
    <label className={cn('fj-field__label', className)} {...props}>
      {children}
      {isRequired && <span className="fj-field__required" aria-hidden="true">*</span>}
    </label>
  );
};

export interface HelperTextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const HelperText: React.FC<HelperTextProps> = ({ children, className, ...props }) => {
  return (
    <p className={cn('fj-field__helper', className)} {...props}>
      {children}
    </p>
  );
};

export interface ErrorMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, className, ...props }) => {
  return (
    <p role="alert" className={cn('fj-field__error', className)} {...props}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {children}
    </p>
  );
};
