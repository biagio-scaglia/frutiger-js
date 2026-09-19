import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders checkbox with label', () => {
    render(<Checkbox label="Enable Aero Glass" />);
    expect(screen.getByLabelText(/enable aero glass/i)).toBeInTheDocument();
  });

  it('toggles checked state upon user click', async () => {
    render(<Checkbox label="Sound effects" />);
    const checkbox = screen.getByLabelText(/sound effects/i);
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('is disabled when disabled prop is provided', () => {
    render(<Checkbox label="Disabled option" disabled />);
    expect(screen.getByLabelText(/disabled option/i)).toBeDisabled();
  });
});
