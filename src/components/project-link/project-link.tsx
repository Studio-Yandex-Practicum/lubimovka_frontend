import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import { Button } from 'components/ui/button';
import { Url } from 'shared/types/common';

import styles from './project-link.module.css';

const cx = classNames.bind(styles);

interface IProjectLinkProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  url: Url;
}

export const ProjectLink: FC<IProjectLinkProps> = (props) => {
  const { title, description, url } = props;

  return (
    <>
      <h3 className={cx('header')}>
        {title}
      </h3>
      <div className={cx('content')}>
        <p className={cx('text')}>
          {description}
        </p>
        <Button
          label="YOUTUBE"
          href={url}
          size="l"
          isLink
          border="full"
          icon="arrow-right"
          iconPlace="right"
          className={cx('button')}
          target="_blank"
        />
      </div>
    </>
  );
};

