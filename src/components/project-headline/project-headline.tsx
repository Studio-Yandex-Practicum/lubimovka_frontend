import classNames from 'classnames/bind';
import Image from 'next/image';

import { Url } from 'shared/types/common';

import styles from './project-headline.module.css';

interface IProjectHeadlineProps {
  title: string;
  intro: string;
  image: Url;
}

const cx = classNames.bind(styles);

export const ProjectHeadline = (props: IProjectHeadlineProps): JSX.Element => {
  const { title, intro, image } = props;

  return (
    <section className={cx('container')}>
      <h1 className={cx('title')}>
        {title}
      </h1>
      <p className={cx('intro')}>
        {intro}
      </p>
      <div className={cx('image')}>
        <Image
          src={image}
          layout="fill"
          alt=""
        />
      </div>
    </section>
  );
};
