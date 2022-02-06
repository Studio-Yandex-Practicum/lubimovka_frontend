import { FC } from 'react';
import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';
import { Email } from 'shared/types';

import styles from './call-to-email.module.css';

const cx = classNames.bind(styles);

interface ICallToEmail {
  type: 'contacts' | 'project';
  title: string;
  description: string;
  callToActionText?: string;
  email: Email;
}

export const CallToEmail: FC<ICallToEmail> = (props) => {
  const {
    title,
    callToActionText,
    description,
    email,
    type
  } = props;

  return (
    <div className={cx(type)}>
      {type === 'project' && (
        <Icon glyph="asterisk" className={cx('asterisk')}/>
      )}
      <h2 className={cx('title')}>
        {title}
      </h2>
      <address className={cx('address')}>
        <p className={cx('description')}>
          {description}
        </p>
        <p className={cx('call-to-action')}>
          {callToActionText && (
            <>
              {callToActionText}
              {' '}
            </>
          )}
          <a
            className={cx('link')}
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </p>
      </address>
    </div>
  );
};
