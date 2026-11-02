import React, { forwardRef, HTMLAttributes, useState, useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface TaskbarTrayProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const TaskbarTray = forwardRef<HTMLDivElement, TaskbarTrayProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('fj-taskbar-tray', className)} {...props}>
        {children}
      </div>
    );
  }
);

TaskbarTray.displayName = 'TaskbarTray';

export interface TaskbarClockProps extends HTMLAttributes<HTMLDivElement> {
  showDate?: boolean;
  is24Hour?: boolean;
}

export const TaskbarClock = forwardRef<HTMLDivElement, TaskbarClockProps>(
  ({ showDate = true, is24Hour = false, className, ...props }, ref) => {
    const [timeStr, setTimeStr] = useState<string>('');
    const [dateStr, setDateStr] = useState<string>('');

    useEffect(() => {
      const update = () => {
        const now = new Date();
        setTimeStr(
          now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: !is24Hour,
          })
        );
        setDateStr(
          now.toLocaleDateString([], {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        );
      };

      update();
      const interval = setInterval(update, 1000);
      return () => clearInterval(interval);
    }, [is24Hour]);

    return (
      <div
        ref={ref}
        className={cn('fj-taskbar-clock', className)}
        aria-live="off"
        aria-label={[timeStr, showDate ? dateStr : null].filter(Boolean).join(', ') || undefined}
        {...props}
      >
        <span>{timeStr || '--:--'}</span>
        {showDate && <span className="fj-taskbar-clock-date">{dateStr || '--/--/----'}</span>}
      </div>
    );
  }
);

TaskbarClock.displayName = 'TaskbarClock';
