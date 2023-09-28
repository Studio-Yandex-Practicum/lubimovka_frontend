import classNames from 'classnames/bind';

import styles from './festival-event-tabs.module.css';

export interface FestivalEventTabsPanelProps {
  title: React.ReactNode
  registrationOpen?: boolean
  registrationOpeningDate: string
  active?: boolean
}

const cx = classNames.bind(styles);

export const FestivalEventTabsPanel: React.FC<FestivalEventTabsPanelProps> = (props) => {
  const {
    active,
    title,
    registrationOpen = false,
    registrationOpeningDate,
    children,
  } = props;

  return (
    <section className={cx(active ? 'panel-active' : 'panel')}>
      <div className={cx('panel-header')}>
        <h2 className={cx('panel-title')}>
          {title}
        </h2>
        {registrationOpen ? (
          <p className={cx('panel-status-open')}>
            открыта регистрация
          </p>
        ) : (
          <p className={cx('panel-status-close')}>
            {`Регистрация откроется ${registrationOpeningDate}`}
          </p>
        )}
      </div>
      <div className={cx('panel-inner')}>
        {children}
      </div>
    </section>
  );
};
