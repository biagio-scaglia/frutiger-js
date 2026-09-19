import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown, DropdownItem, DropdownSelect } from './Dropdown';

describe('Dropdown Suite', () => {
  it('renders trigger and toggles menu visibility', () => {
    render(
      <Dropdown trigger={<button>Open Menu</button>}>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
      </Dropdown>
    );

    expect(screen.getByRole('button', { name: 'Open Menu' })).toBeInTheDocument();
    expect(screen.queryByText('Profile')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('handles item clicks and invokes callbacks', () => {
    const handleClick = vi.fn();
    render(
      <Dropdown isOpen trigger={<button>Menu</button>}>
        <DropdownItem onClick={handleClick}>Action Item</DropdownItem>
      </Dropdown>
    );

    fireEvent.click(screen.getByText('Action Item'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders DropdownSelect and changes value', () => {
    const handleChange = vi.fn();
    const options = [
      { value: 'opt1', label: 'Option 1' },
      { value: 'opt2', label: 'Option 2' },
    ];

    render(<DropdownSelect options={options} value="opt1" onChange={handleChange} />);

    expect(screen.getByText('Option 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Option 1'));
    expect(screen.getByText('Option 2')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith('opt2');
  });
});
