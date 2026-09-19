import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Taskbar } from './Taskbar';
import { TaskbarStart } from './TaskbarStart';
import { TaskbarItem, TaskbarItems } from './TaskbarItem';
import { TaskbarTray, TaskbarClock } from './TaskbarTray';
import { StartMenu } from './StartMenu';

describe('Taskbar Suite', () => {
  it('renders Taskbar with role="toolbar" and aria-label', () => {
    render(
      <Taskbar data-testid="taskbar">
        <span>Taskbar Content</span>
      </Taskbar>
    );

    const bar = screen.getByTestId('taskbar');
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveAttribute('role', 'toolbar');
    expect(bar).toHaveAttribute('aria-label', 'Desktop Taskbar');
    expect(bar).toHaveClass('fj-taskbar');
  });

  it('renders TaskbarStart and triggers click events', () => {
    const handleClick = vi.fn();
    render(<TaskbarStart isOpen={false} onClick={handleClick} />);

    const startBtn = screen.getByRole('button', { name: /start menu/i });
    expect(startBtn).toBeInTheDocument();
    expect(startBtn).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(startBtn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders TaskbarItem with active and minimized states', () => {
    render(
      <TaskbarItems>
        <TaskbarItem label="Aero Explorer" isActive={true} />
        <TaskbarItem label="Media Player" isMinimized={true} />
      </TaskbarItems>
    );

    const activeItem = screen.getByRole('button', { name: /aero explorer/i });
    expect(activeItem).toBeInTheDocument();
    expect(activeItem).toHaveClass('fj-taskbar-item-active');
    expect(activeItem).toHaveAttribute('aria-pressed', 'true');

    const minimizedItem = screen.getByRole('button', { name: /media player/i });
    expect(minimizedItem).toBeInTheDocument();
    expect(minimizedItem).toHaveClass('fj-taskbar-item-minimized');
  });

  it('renders TaskbarTray and TaskbarClock', () => {
    render(
      <TaskbarTray>
        <TaskbarClock data-testid="clock" showDate />
      </TaskbarTray>
    );

    const clock = screen.getByTestId('clock');
    expect(clock).toBeInTheDocument();
    expect(clock).toHaveAttribute('role', 'timer');
  });

  it('renders StartMenu when isOpen is true and fires item clicks', () => {
    const handleAppClick = vi.fn();
    const { rerender } = render(
      <StartMenu
        isOpen={false}
        userName="Biagio Scaglia"
        programs={[{ id: 'p1', label: 'Internet Explorer', onClick: handleAppClick }]}
      />
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    rerender(
      <StartMenu
        isOpen={true}
        userName="Biagio Scaglia"
        programs={[{ id: 'p1', label: 'Internet Explorer', onClick: handleAppClick }]}
      />
    );

    expect(screen.getByRole('dialog', { name: /start menu/i })).toBeInTheDocument();
    expect(screen.getByText('Biagio Scaglia')).toBeInTheDocument();

    const appBtn = screen.getByRole('menuitem', { name: /internet explorer/i });
    fireEvent.click(appBtn);
    expect(handleAppClick).toHaveBeenCalledTimes(1);
  });
});
