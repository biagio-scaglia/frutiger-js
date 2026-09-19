import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders alert message and title', () => {
    render(<Alert title="System Notification">Update successfully installed.</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('System Notification')).toBeInTheDocument();
    expect(screen.getByText('Update successfully installed.')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    render(<Alert onClose={handleClose}>Dismissible notice</Alert>);
    const closeBtn = screen.getByRole('button', { name: /close alert/i });
    await userEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
