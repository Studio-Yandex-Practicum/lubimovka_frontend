import { FC } from 'react';
import cn from 'classnames/bind';
import { Icon } from 'components/ui/icon';
import styles from './donationPageTitle.module.css';

const cx = cn.bind(styles);

interface IDonationPageTitleProps {
  header: string;
  text: string;
  footnote: string;
}

export const DonationPageTitle: FC<IDonationPageTitleProps> = (props) => {
  const { header, text, footnote } = props;

  return (
    <section className={cx('componentContainer')}>
      <div className={cx('data')}>
        <h1 className={cx('header')}>
          {header}
        </h1>
        <p className={cx('text')}>
          {text}
        </p>
        <p className={cx('footnote')}>
          <Icon className={cx('asterisk')} glyph="asterisk" fill='--var(coal)'/>
          {footnote}
        </p>
      </div>
      <div className={cx('advertisement')}>
        <iframe
          className={cx('iframe')}
          src="https://goody.im/form/9bc4b4afb926640f7ef3fa8f/frame"
          name="goody_container_form"
          frameBorder="no"
        />
      </div>
    </section>
  );
};
