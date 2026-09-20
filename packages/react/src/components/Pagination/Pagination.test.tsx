import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination Suite', () => {
  it('renders page buttons and marks active page with aria-current', () => {
    const handlePageChange = vi.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={handlePageChange}
      />
    );

    expect(screen.getByRole('navigation', { name: 'Pagination Navigation' })).toBeInTheDocument();

    const activeBtn = screen.getByRole('button', { name: 'Go to page 2' });
    expect(activeBtn).toHaveAttribute('aria-current', 'page');

    const nextBtn = screen.getByRole('button', { name: 'Go to next page' });
    fireEvent.click(nextBtn);
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  it('disables previous button on first page', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={vi.fn()}
      />
    );

    const prevBtn = screen.getByRole('button', { name: 'Go to previous page' });
    expect(prevBtn).toBeDisabled();
  });
});
