import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './form-field.module.css';

interface IFormField {
  caption: string
  hiddenCaption?: boolean
  className?: string
}

const cx = classNames.bind(styles);

export const FormField: FC<IFormField> = (props) => {
  const {
    caption,
    hiddenCaption,
    children,
  } = props;

  return (
    <label>
      <span className={cx({
        hidden: hiddenCaption,
      })}
      >
        {caption}
      </span>
      {children}
    </label>
  );
};
