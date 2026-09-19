import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Tabs, TabList, Tab, TabPanel } from './Tabs';

describe('Tabs', () => {
  it('renders tab list and default active panel', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab value="tab1">First</Tab>
          <Tab value="tab2">Second</Tab>
        </TabList>
        <TabPanel value="tab1">First Content</TabPanel>
        <TabPanel value="tab2">Second Content</TabPanel>
      </Tabs>
    );

    expect(screen.getByRole('tab', { name: 'First' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Second' })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByText('First Content')).toBeInTheDocument();
    expect(screen.queryByText('Second Content')).not.toBeInTheDocument();
  });

  it('switches panels on tab click', async () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab value="tab1">First</Tab>
          <Tab value="tab2">Second</Tab>
        </TabList>
        <TabPanel value="tab1">First Content</TabPanel>
        <TabPanel value="tab2">Second Content</TabPanel>
      </Tabs>
    );

    const secondTab = screen.getByRole('tab', { name: 'Second' });
    await userEvent.click(secondTab);

    expect(secondTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Second Content')).toBeInTheDocument();
    expect(screen.queryByText('First Content')).not.toBeInTheDocument();
  });
});
