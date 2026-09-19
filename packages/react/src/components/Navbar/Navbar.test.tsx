import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Navbar, NavLink } from './Navbar';

describe('Navbar', () => {
  it('renders navbar brand and nav links', () => {
    render(
      <Navbar brand={<span>Frutiger Brand</span>}>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
      </Navbar>
    );

    expect(screen.getByText('Frutiger Brand')).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Home' })[0]).toBeInTheDocument();
  });

  it('toggles mobile menu on button click and updates aria-expanded', async () => {
    render(
      <Navbar brand={<span>Aero</span>}>
        <NavLink href="#explore">Explore</NavLink>
      </Navbar>
    );

    const toggleBtn = screen.getByRole('button', { name: /open menu/i });
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

    await userEvent.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes mobile menu on Escape key press', async () => {
    const handleToggle = vi.fn();
    render(
      <Navbar brand={<span>Aero</span>} isMenuOpen={true} onMenuToggle={handleToggle}>
        <NavLink href="#docs">Docs</NavLink>
      </Navbar>
    );

    await userEvent.keyboard('{Escape}');
    expect(handleToggle).toHaveBeenCalledWith(false);
  });
});
