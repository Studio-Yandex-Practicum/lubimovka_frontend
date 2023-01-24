import React, { cloneElement } from 'react';
import classNames from 'classnames/bind';

import type { FestivalEventTabsPanelProps } from './festival-event-tabs-panel';

import styles from './festival-event-tabs.module.css';
import { ArrowButton } from 'components/arrow-button';

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
        <ArrowButton
          variant="backward"
          size="s"
          onClick={goToPrevious}
          disabled={selectedTabIndex === 0}
          text="Перейти к предыдущей дате"
        />
        <ArrowButton
          variant="forward"
          size="s"
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
