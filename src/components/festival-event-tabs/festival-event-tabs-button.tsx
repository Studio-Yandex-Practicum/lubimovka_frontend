import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './festival-event-tabs.module.css';

interface FestivalEventTabsButtonProps {
  variant: 'backward' | 'forward'
  disabled?: boolean
  text: string
  onClick: () => void
}

const cx = classNames.bind(styles);

export const FestivalEventTabsButton: React.FC<FestivalEventTabsButtonProps> = (props) => {
  const {
    variant,
    disabled,
    text,
    onClick,
  } = props;

  return (
    <button
      type="button"
      className={cx(variant)}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={cx('button-icon')}>
        <Icon
          glyph={variant === 'forward' ? 'arrow-right' : 'arrow-left'}
          width="100%"
          height="100%"
        />
      </span>
      {text}
    </button>
  );
};
