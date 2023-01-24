import classNames from 'classnames/bind';
import Image from 'next/image';

import { Icon } from 'components/ui/icon';

import type { Person } from 'core/person';

import styles from './person-card.module.css';

interface PersonCardProps extends Person {
  size?: 's' | 'm'
  titleTag?: React.ElementType
  onClick?: () => void
}

const cx = classNames.bind(styles);

export const PersonCard: React.VFC<PersonCardProps> = (props) => {
  const {
    size = 'm',
    titleTag: TitleTag = 'h3',
    fullName,
    photoUrl,
    role,
    onClick,
  } = props;

  return (
    <div className={cx(size)}>
      <div className={cx('tile')}>
        {photoUrl && (
          <Image
            width={210}
            height={265}
            src={photoUrl}
            objectFit="cover"
            layout="fill"
            alt=""
          />
        )}
        {onClick && (
          <button
            className={cx('action')}
            onClick={onClick}
          >
            <Icon
              glyph={'comment'}
              width="100%"
              height="100%"
            />
            Показать отзыв
          </button>
        )}
      </div>
      <TitleTag className={cx('name')}>
        {fullName}
      </TitleTag>
      {role && (
        <p className={cx('role')}>
          {role}
        </p>
      )}
    </div>
  );
};
