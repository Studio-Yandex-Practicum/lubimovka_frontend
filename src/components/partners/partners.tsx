import {FC, HTMLAttributes} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames/bind';

import { Section } from 'components/section';
import { Url } from 'shared/types/common';

import styles from './partners.module.css';
import mockData from './assets/mock-data.json';

const cx = cn.bind(styles);

interface IPartnersProps extends HTMLAttributes<HTMLElement> {
  align?: 'left' | 'center';
  data?: [
    {
      id: number;
      title: string;
      content: [
        {
          id: number;
          image: Url;
          link: Url;
          text: string;
        },
      ];
    },
  ];
}

export const Partners: FC<IPartnersProps> = ({ align = 'left', data = mockData, className }) => {
  return (
    <div className={cx('container', className)}>
      {data.map((partners) => (
        <Section
          type='partners'
          title={partners.title}
          key={partners.id}
          titleTag={partners.id === 1 ? 'h2' : 'h3'}
        >
          <ul className={cx('list', align)}>
            {partners.content.map((partner) => (
              <li className={cx('listElement')} key={partner.id}>
                <Link href={partner.link}>
                  <a className={cx('link')}>
                    <div className={cx('imageContainer')}>
                      <Image src={partner.image} layout='fill' objectFit='contain' />
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
