import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders input with label', () => {
    render(<Input label="Email address" placeholder="you@domain.com" />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });

  it('updates value on typing', async () => {
    render(<Input label="Username" />);
    const input = screen.getByLabelText(/username/i);
    await userEvent.type(input, 'frutiger_user');
    expect(input).toHaveValue('frutiger_user');
  });

  it('displays error message and sets aria-invalid', () => {
    render(<Input label="Password" error="Password is required" />);
    const input = screen.getByLabelText(/password/i);
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Password is required');
  });

  it('is disabled when disabled prop is set', () => {
    render(<Input label="Disabled input" disabled />);
    const input = screen.getByLabelText(/disabled input/i);
    expect(input).toBeDisabled();
  });
});
