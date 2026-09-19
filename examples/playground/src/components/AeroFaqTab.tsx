import React, { useState, useMemo, ChangeEvent } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Input,
  Button,
  Stack,
  FaqList,
  FaqItem,
  IconSearch,
} from '@frutiger-js/react';

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    category: 'Design & Philosophy',
    question: 'What is Frutiger Aero and why is it returning in modern web design?',
    answer:
      'Frutiger Aero was the dominant digital aesthetic from roughly 2004 to 2013 (exemplified by Windows Vista/7, Mac OS X Aqua/Tiger, and early iOS). It is defined by optimistic skeuomorphism, vivid sky-blue and emerald-green color schemes, glossy glass textures (acrylics), water motifs, and daylight radiance. It is experiencing a massive resurgence as developers and users seek tactile depth, optimism, and richness after a decade of austere, flat minimalism.',
  },
  {
    id: 'faq-2',
    category: 'Design & Philosophy',
    question: 'How does Frutiger.js achieve authentic gloss without compromising performance?',
    answer:
      'Frutiger.js uses pure CSS3 linear/radial gradients, backdrop-filter hardware acceleration, specular pseudo-element highlights, and layered box-shadows. By avoiding heavy images and runtime JS styling engines, components render with zero layout shift and 60fps fluidity.',
  },
  {
    id: 'faq-3',
    category: 'Architecture',
    question: 'How do CSS Cascade Layers work in @frutiger-js/core?',
    answer:
      'All core styles are organized into predictable CSS Cascade Layers (@layer fj.reset, fj.tokens, fj.base, fj.utilities, fj.components, fj.themes). This architecture ensures that you can override any token or component style easily without messy !important hacks or high CSS specificity battles.',
  },
  {
    id: 'faq-4',
    category: 'Responsive Architecture',
    question: 'Is Frutiger.js truly responsive across all mobile viewports?',
    answer:
      'Yes! Frutiger.js is built from the ground up on a Fluid-First responsive architecture. Using continuous CSS clamp() interpolation, auto-fit container grids, minmax() calculations, and safe-touch target sizing (44px minimum touch targets on mobile), components fluidly adapt from 320px compact smartphones up to 3840px 4K ultrawide monitors with zero horizontal overflow.',
  },
  {
    id: 'faq-5',
    category: 'Accessibility',
    question: 'Are Frutiger.js components accessible and compliant with WCAG 2.1 AA?',
    answer:
      'Absolutely. Every component adheres to WCAG 2.1 AA standards: high contrast text tokens (e.g. #034870 on light backgrounds, minimum 4.5:1 ratio), native semantic HTML tags (<button>, <details>, <dialog>, <nav>), visible high-contrast focus rings, full keyboard navigation (Enter, Space, Arrow keys, Escape), and ARIA attributes (aria-expanded, aria-controls, role="region").',
  },
  {
    id: 'faq-6',
    category: 'Integration & Frameworks',
    question: 'Can I use Frutiger.js with Next.js App Router, Remix, Vite, or plain HTML?',
    answer:
      'Yes! @frutiger-js/core is completely framework-agnostic vanilla CSS that can be used in any web project with simple class names (e.g., .fj-btn, .fj-card, .fj-window-frame, .fj-gallery-grid). @frutiger-js/react provides fully typed React 18/19 components with SSR support and zero CSS-in-JS runtime overhead.',
  },
];

export const AeroFaqTab: React.FC = React.memo(() => {
  const [faqSearch, setFaqSearch] = useState('');

  const filteredFaqs = useMemo(() => {
    const query = faqSearch.trim().toLowerCase();
    if (!query) return FAQ_ITEMS;
    return FAQ_ITEMS.filter(
      item =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [faqSearch]);

  return (
    <Stack spacing="lg">
      <Card variant="glass">
        <CardHeader>
          <div>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Architectural decisions, Frutiger Aero design history, and technical FAQ.
            </CardDescription>
          </div>
          <Badge variant="nature">WCAG 2.1 AA Accessible</Badge>
        </CardHeader>
        <CardContent>
          <div style={{ marginBottom: '1.5rem', maxWidth: '400px' }}>
            <Input
              placeholder="Search knowledgebase questions..."
              value={faqSearch}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFaqSearch(e.target.value)}
              leftIcon={<IconSearch size={16} />}
            />
          </div>

          <FaqList>
            {filteredFaqs.map(faq => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                badge={<Badge variant="primary">{faq.category}</Badge>}
              >
                <p
                  style={{
                    margin: 0,
                    lineHeight: 1.7,
                    color: 'var(--fj-color-text)',
                  }}
                >
                  {faq.answer}
                </p>
              </FaqItem>
            ))}
          </FaqList>

          {filteredFaqs.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '2.5rem 1rem',
                color: 'var(--fj-color-text-muted)',
              }}
            >
              <p>No questions found matching &ldquo;{faqSearch}&rdquo;</p>
              <Button variant="primary" size="sm" onClick={() => setFaqSearch('')}>
                View All Questions
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </Stack>
  );
});
