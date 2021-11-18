import { FC } from 'react';
import cn from 'classnames/bind';
import { Icon } from 'components/ui/icon';
import styles from './enthuasiasm.module.css';

const cx = cn.bind(styles);

interface IEnthusiasmProps {
  header: string;
  text: Array<string>;
  footnote: string;
}

export const Enthusiasm: FC<IEnthusiasmProps> = (props) => {
  const { header, text, footnote } = props;

  return (
    <section className={cx('componentContainer')}>
      <div className={cx('data')}>
        <h1 className={cx('header')}>
          {header}
        </h1>
        <div className={cx('text')}>
          <p>{text[0]}</p>
          <p>{text[1]}</p>
        </div>
        <p className={cx('footnote')}>
          <Icon className={cx('asterisk')} glyph="asterisk" fill='--var(coal)' />
          {footnote}
        </p>
      </div>
      <div className={cx('advertisement')}>
        <div className={cx('advStub')}>
        </div>
      </div>
    </section>
  );
};
