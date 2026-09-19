import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatCard } from './StatCard';

describe('StatCard', () => {
  it('renders value and label correctly', () => {
    render(<StatCard value="2.4M" label="Active Downloads" trend="+18.4%" />);
    expect(screen.getByText('2.4M')).toBeInTheDocument();
    expect(screen.getByText('Active Downloads')).toBeInTheDocument();
    expect(screen.getByText(/18.4%/)).toBeInTheDocument();
  });
});
