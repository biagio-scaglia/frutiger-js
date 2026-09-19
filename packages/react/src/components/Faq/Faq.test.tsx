import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FaqList, FaqItem } from './Faq';

describe('Faq', () => {
  it('renders Faq questions and content', () => {
    render(
      <FaqList>
        <FaqItem question="What is Frutiger Aero?">
          A design movement characterized by skeumorphic glass and nature.
        </FaqItem>
      </FaqList>
    );
    expect(screen.getByText('What is Frutiger Aero?')).toBeInTheDocument();
    expect(screen.getByText(/A design movement/)).toBeInTheDocument();
  });
});
