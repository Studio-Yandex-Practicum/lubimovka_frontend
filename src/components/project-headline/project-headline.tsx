import classNames from 'classnames/bind';
import Image from 'next/image';

import styles from './project-headline.module.css';

interface ProjectHeadlineProps {
  title: string
  intro: string
  image: Url
}

const cx = classNames.bind(styles);

export const ProjectHeadline = (props: ProjectHeadlineProps) => {
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
          objectFit="cover"
          alt=""
        />
      </div>
    </section>
  );
};
