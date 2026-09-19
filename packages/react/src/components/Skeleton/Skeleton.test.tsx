import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders with custom height and pill variant', () => {
    const { container } = render(<Skeleton variant="pill" height="20px" width="100px" />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton).toHaveClass('fj-skeleton--pill');
    expect(skeleton).toHaveStyle({ height: '20px', width: '100px' });
  });
});
