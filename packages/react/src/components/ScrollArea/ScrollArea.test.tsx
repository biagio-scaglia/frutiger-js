import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ScrollArea } from './ScrollArea';

describe('ScrollArea', () => {
  it('renders children with accessible scrollable region role', () => {
    render(
      <ScrollArea maxHeight="150px">
        <p>Scrollable content line 1</p>
        <p>Scrollable content line 2</p>
      </ScrollArea>
    );
    expect(screen.getByRole('region', { name: /scrollable region/i })).toBeInTheDocument();
    expect(screen.getByText('Scrollable content line 1')).toBeInTheDocument();
  });
});
