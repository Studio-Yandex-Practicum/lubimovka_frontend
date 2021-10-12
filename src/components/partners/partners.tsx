import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames/bind';

import { Section } from 'components/section';

import styles from './partners.module.css';
import data from './assets/mock-data.json';

const cx = cn.bind(styles);

interface IPartnersProps {
  align?: 'left' | 'center';
}

export const Partners: FC<IPartnersProps> = ({ align = 'left' }) => {
  return (
    <div className={cx('container')}>
      {data.map((partners) => (
        <Section
          type="partners"
          title={partners.title}
          key={partners.id}
          component={partners.id === 1 ? 'h2' : 'h3'}
        >
          <ul className={cx('list', align)}>
            {partners.content.map((partner) => (
              <li className={cx('listElement')} key={partner.id}>
                <Link href={partner.link}>
                  <a className={cx('link')}>
                    <div className={cx('imageContainer')}>
                      <Image src={partner.image} layout="fill" objectFit="contain" />
                    </div>
                    {partner.text && <p className={cx('text')}>{partner.text}</p>}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </div>
  );
};
