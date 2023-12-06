import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './arrow-button.module.css';

interface ImageCarouselButtonProps {
  variant: 'backward' | 'forward'
  size?: 's' | 'm'
  disabled?: boolean
  text: string
  className?: string
  onClick: () => void
}

const cx = classNames.bind(styles);

export const ArrowButton: React.FC<ImageCarouselButtonProps> = (props) => {
  const {
    variant,
    size = 'm',
    disabled,
    text,
    className,
    onClick,
  } = props;

  return (
    <button
      type="button"
      className={cx(variant, size, className)}
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
