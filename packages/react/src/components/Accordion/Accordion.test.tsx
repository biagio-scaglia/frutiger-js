import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

describe('Accordion', () => {
  it('toggles accordion section on trigger click', async () => {
    render(
      <Accordion>
        <AccordionItem value="item1">
          <AccordionTrigger>What is Frutiger Aero?</AccordionTrigger>
          <AccordionContent>A design aesthetic featuring sky, water, and gloss.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByRole('button', { name: /what is frutiger aero\?/i });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText(/a design aesthetic featuring sky/i)).not.toBeInTheDocument();

    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(/a design aesthetic featuring sky/i)).toBeInTheDocument();
  });
});
