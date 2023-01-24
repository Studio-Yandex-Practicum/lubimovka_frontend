import classNames from 'classnames/bind';

import styles from './festival-event-tabs.module.css';

export interface FestivalEventTabsPanelProps {
  title: React.ReactNode
  hidden?: boolean
}

const cx = classNames.bind(styles);

export const FestivalEventTabsPanel: React.FC<FestivalEventTabsPanelProps> = (props) => {
  const {
    title,
    hidden,
    children,
  } = props;

  return (
    <section className={cx({ 'panel-hidden': hidden })}>
      <div className={cx('panel-header')}>
        <h2 className={cx('panel-title')}>
          {title}
        </h2>
      </div>
      <div className={cx('panel-inner')}>
        {children}
      </div>
    </section>
  );
};
