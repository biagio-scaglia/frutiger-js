import React, { createContext, useContext, useState, useId } from 'react';
import { cn } from '../../utils/cn';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs compound components must be used within <Tabs>');
  return ctx;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  className,
  defaultValue = '',
  value: controlledValue,
  onValueChange,
  ...props
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const baseId = useId();

  const isControlled = controlledValue !== undefined;
  const activeTab = isControlled ? controlledValue : uncontrolledValue;

  const setActiveTab = (val: string) => {
    if (!isControlled) {
      setUncontrolledValue(val);
    }
    onValueChange?.(val);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, baseId }}>
      <div className={cn('fj-tabs', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export type TabListProps = React.HTMLAttributes<HTMLDivElement>;
export const TabList: React.FC<TabListProps> = ({ children, className, ...props }) => {
  return (
    <div role="tablist" className={cn('fj-tabs__list', className)} {...props}>
      {children}
    </div>
  );
};

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}
export const Tab: React.FC<TabProps> = ({ children, className, value, ...props }) => {
  const { activeTab, setActiveTab, baseId } = useTabsContext();
  const isSelected = activeTab === value;

  return (
    <button
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-selected={isSelected}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={isSelected ? 0 : -1}
      className={cn('fj-tab', className)}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
};

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}
export const TabPanel: React.FC<TabPanelProps> = ({ children, className, value, ...props }) => {
  const { activeTab, baseId } = useTabsContext();
  const isSelected = activeTab === value;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      className={cn('fj-tab-panel', className)}
      {...props}
    >
      {children}
    </div>
  );
};
