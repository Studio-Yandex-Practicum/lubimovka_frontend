import classNames from 'classnames/bind';

import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';

import type { FC } from 'react';
import type { Url } from 'shared/types';

import styles from './performance-event-list-item.module.css';

interface PerformanceEventListProps {
  date?: string
  ticketsUrl: Url
}

const cx = classNames.bind(styles);

export const PerformanceEventListItem: FC<PerformanceEventListProps> = (props) => {
  const { date, ticketsUrl } = props;

  return (
    <li className={cx('root')}>
      {date && (
        <time className={cx('date')}>
          {date}
        </time>
      )}
      <div>
        <Button
          className={cx('action')}
          border="full"
          size="l"
          upperCase
          icon={(
            <Icon
              glyph="arrow-right"
              width="100%"
              height="100%"
            />
          )}
          iconPosition="right"
          href={ticketsUrl}
          target="_blank"
        >
          Билеты
        </Button>
      </div>
    </li>
  );
};
