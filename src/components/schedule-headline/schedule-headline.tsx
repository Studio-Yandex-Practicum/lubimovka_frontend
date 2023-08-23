import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import type { ScheduleMeta } from 'core/schedule';

import styles from './schedule-headline.module.css';

interface ScheduleHeadlineProps extends Omit<ScheduleMeta, 'mode'> {
  title: string
}

const cx = classNames.bind(styles);

export const ScheduleHeadline: React.VFC<ScheduleHeadlineProps> = (props) => {
  const { title, scheduleAnnounce, scheduleNote, registrationAnnounce } = props;

  return (
    <div className={cx('root')}>
      <h1 className={cx('title')}>
        {title}
      </h1>
      <p className={cx('schedule-announce')}>
        {scheduleAnnounce}
      </p>
      {registrationAnnounce && (
        <p className={cx('registration-announce')}>
          {registrationAnnounce}
        </p>
      )}
      {scheduleNote && (
        <div className={cx('schedule-note')}>
          <Icon glyph="asterisk"/>
          <p className={cx('schedule-note-text')}>
            {scheduleNote}
          </p>
        </div>
      )}
    </div>
  );
};
