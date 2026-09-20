import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Toast } from './Toast';
import { ToastProvider, useToast } from './ToastProvider';

const ToastTestConsumer = () => {
  const { toast } = useToast();
  return (
    <button
      onClick={() =>
        toast({
          title: 'Download Complete',
          description: 'wallpaper_aero_1080p.png has been saved.',
          variant: 'success',
        })
      }
    >
      Trigger Toast
    </button>
  );
};

describe('Toast & ToastProvider Suite', () => {
  it('renders standalone toast with title, description, and status role', () => {
    const handleClose = vi.fn();
    render(
      <Toast
        id="t-1"
        title="Network Connected"
        description="Speed: 100 Mbps"
        variant="info"
        onClose={handleClose}
      />
    );

    expect(screen.getByText('Network Connected')).toBeInTheDocument();
    expect(screen.getByText('Speed: 100 Mbps')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: 'Close notification' });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledWith('t-1');
  });

  it('renders alert role for danger variant', () => {
    render(<Toast id="t-err" title="Disk Error" variant="danger" />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('spawns toast via ToastProvider context', () => {
    render(
      <ToastProvider>
        <ToastTestConsumer />
      </ToastProvider>
    );

    fireEvent.click(screen.getByText('Trigger Toast'));
    expect(screen.getByText('Download Complete')).toBeInTheDocument();
    expect(screen.getByText('wallpaper_aero_1080p.png has been saved.')).toBeInTheDocument();
  });
});
