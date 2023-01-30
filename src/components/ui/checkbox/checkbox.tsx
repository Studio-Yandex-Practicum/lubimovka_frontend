import classNames from 'classnames/bind';
import { useCallback } from 'react';

import { Icon } from 'components/ui/icon';

import type { ChangeEventHandler } from 'react';

import styles from './checkbox.module.css';

const cx = classNames.bind(styles);

interface CheckboxProps {
  variant?: 'checkmark' | 'pseudo-button'
  checked?: boolean
  onChange: (checked: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    variant = 'checkmark',
    children,
    checked,
    onChange
  } = props;

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => onChange(event.target.checked),
    [onChange]
  );

  return (
    <label className={cx(variant, { checked })}>
      <input
        className={cx('control')}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {variant === 'checkmark' && (
        <span className={cx('icon')}>
          {checked && (
            <Icon
              glyph="ok"
              width="100%"
              height="100%"
            />
          )}
        </span>
      )}
      <span
        className={cx('text')}
        {...typeof children === 'string' && { title: children }}
      >
        {children}
      </span>
    </label>
  );
};
