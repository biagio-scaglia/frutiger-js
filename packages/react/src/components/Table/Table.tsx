import React, {
  forwardRef,
  HTMLAttributes,
  TableHTMLAttributes,
  ThHTMLAttributes,
  TdHTMLAttributes,
} from 'react';
import { cn } from '../../utils/cn';

export interface TableContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('fj-table-container', className)} {...props}>
        {children}
      </div>
    );
  }
);

TableContainer.displayName = 'TableContainer';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  isStriped?: boolean;
  isHoverable?: boolean;
  isCompact?: boolean;
  responsiveMode?: 'scroll' | 'stack';
  children?: React.ReactNode;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      isStriped = false,
      isHoverable = true,
      isCompact = false,
      responsiveMode = 'scroll',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <table
        ref={ref}
        className={cn(
          'fj-table',
          isStriped && 'fj-table-striped',
          isHoverable && 'fj-table-hoverable',
          isCompact && 'fj-table-compact',
          responsiveMode === 'stack' && 'fj-table-stack-mobile',
          className
        )}
        {...props}
      >
        {children}
      </table>
    );
  }
);

Table.displayName = 'Table';

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead ref={ref} className={cn('fj-table-head', className)} {...props}>
        {children}
      </thead>
    );
  }
);

TableHeader.displayName = 'TableHeader';

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tbody ref={ref} className={className} {...props}>
        {children}
      </tbody>
    );
  }
);

TableBody.displayName = 'TableBody';

export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tfoot ref={ref} className={className} {...props}>
        {children}
      </tfoot>
    );
  }
);

TableFooter.displayName = 'TableFooter';

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tr ref={ref} className={className} {...props}>
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow';

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, children, scope = 'col', ...props }, ref) => {
    return (
      <th ref={ref} scope={scope} className={className} {...props}>
        {children}
      </th>
    );
  }
);

TableHead.displayName = 'TableHead';

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  dataLabel?: string;
  children?: React.ReactNode;
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ dataLabel, className, children, ...props }, ref) => {
    return (
      <td ref={ref} data-label={dataLabel} className={className} {...props}>
        {children}
      </td>
    );
  }
);

TableCell.displayName = 'TableCell';

export interface TableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {
  children?: React.ReactNode;
}

export const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <caption ref={ref} className={className} {...props}>
        {children}
      </caption>
    );
  }
);

TableCaption.displayName = 'TableCaption';
