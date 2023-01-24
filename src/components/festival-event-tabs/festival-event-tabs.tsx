import React, { cloneElement } from 'react';
import classNames from 'classnames/bind';

import { FestivalEventTabsButton } from './festival-event-tabs-button';

import type { FestivalEventTabsPanelProps } from './festival-event-tabs-panel';

import styles from './festival-event-tabs.module.css';

interface FestivalEventTabsProps {
  children: React.ReactElement<FestivalEventTabsPanelProps>[]
  selectedTabIndex: number
  onTabChange: (tabIndex: number, totalTabCount: number) => void
}

const cx = classNames.bind(styles);

export const FestivalEventTabs: React.FC<FestivalEventTabsProps> = (props) => {
  const {
    selectedTabIndex,
    onTabChange,
    children,
  } = props;

  const tabs = React.Children.toArray(children) as FestivalEventTabsProps['children'];

  const goToNext = () => {
    onTabChange(selectedTabIndex + 1, tabs.length);
  };

  const goToPrevious = () => {
    onTabChange(selectedTabIndex -1, tabs.length);
  };

  return (
    <div className={cx('root')}>
      <div className={cx('controls')}>
        <FestivalEventTabsButton
          variant="backward"
          onClick={goToPrevious}
          disabled={selectedTabIndex === 0}
          text="Перейти к предыдущей дате"
        />
        <FestivalEventTabsButton
          variant="forward"
          onClick={goToNext}
          disabled={selectedTabIndex === tabs.length - 1}
          text="Перейти к следующей дате"
        />
      </div>
      {tabs.map((tab, currentTabIndex) => (
        cloneElement(tab, { hidden: currentTabIndex !== selectedTabIndex })
      ))}
    </div>
  );
};
