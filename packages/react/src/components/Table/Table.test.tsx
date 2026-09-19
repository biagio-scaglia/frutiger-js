import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Table,
  TableContainer,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from './Table';

describe('Table Component', () => {
  it('renders semantic table structure with caption', () => {
    render(
      <TableContainer data-testid="table-container">
        <Table isStriped isHoverable>
          <TableCaption>System Viewport Compatibility</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Viewport</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell dataLabel="Viewport">320 × 568</TableCell>
              <TableCell dataLabel="Category">Compact Mobile</TableCell>
              <TableCell dataLabel="Status">Verified</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );

    const container = screen.getByTestId('table-container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('fj-table-container');

    const table = screen.getByRole('table');
    expect(table).toHaveClass('fj-table');
    expect(table).toHaveClass('fj-table-striped');
    expect(table).toHaveClass('fj-table-hoverable');

    expect(screen.getByText('System Viewport Compatibility')).toBeInTheDocument();
    expect(screen.getByText('320 × 568')).toBeInTheDocument();
    expect(screen.getByText('Compact Mobile')).toBeInTheDocument();
    expect(screen.getByText('Verified')).toBeInTheDocument();
  });

  it('renders responsive stack mode with data-label attributes', () => {
    render(
      <Table responsiveMode="stack">
        <TableBody>
          <TableRow>
            <TableCell dataLabel="Header Field">Content Value</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const table = screen.getByRole('table');
    expect(table).toHaveClass('fj-table-stack-mobile');

    const cell = screen.getByText('Content Value');
    expect(cell).toHaveAttribute('data-label', 'Header Field');
  });
});
