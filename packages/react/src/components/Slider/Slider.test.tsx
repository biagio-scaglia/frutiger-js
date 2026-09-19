import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders correctly with label and initial value', () => {
    render(<Slider label="Volume Level" defaultValue={75} />);
    expect(screen.getByText('Volume Level')).toBeInTheDocument();
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('triggers onChange when adjusted', () => {
    const handleChange = vi.fn();
    render(<Slider label="Brightness" defaultValue={50} onChange={handleChange} />);
    const input = screen.getByRole('slider');
    fireEvent.change(input, { target: { value: '80' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
