import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import qrcode from '../../../../public/images/donation/lubimovka-qrcode.jpeg';
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
        <div className={cx('qrcodeContainer')}>
          <Link href="https://qr.nspk.ru/AS10004LII9QK8KP8ADRSSI2TIAV1NNF?type=01&bank=100000000007&crc=D63D">
            <a>
              <div className={cx('qrcode')}>
                <Image
                  src={qrcode}
                  alt='QR-code для отправки доната'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </a>
          </Link>
          <p className={cx('qrcodeAdviseDesktop')}>
            Поддержать фестиваль можно ещё проще! Откройте приложение своего банка, выберите функцию &quot;Оплата по QR-коду&quot; и отсканируйте этот код. Или просто нажмите на QR-код, приложение вашего банка откроется само.
          </p>
          <p className={cx('qrcodeAdviseMobile')}>
            Поддержать фестиваль можно ещё проще! Просто нажмите на QR-код, и приложение вашего банка откроется само.
          </p>
        </div>
      </div>
    </section>
  );
};
