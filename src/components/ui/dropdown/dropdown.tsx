import classNames from 'classnames/bind';
import { useCallback, useEffect, useRef } from 'react';

import { Button } from 'components/ui/button2';

import type { FC } from 'react';
import type { ButtonOwnProps } from 'components/ui/button2';

import styles from './dropdown.module.css';

interface DropdownProps {
  className?: string
  opened: boolean
  buttonProps: Omit<ButtonOwnProps, 'fullWidth' | 'pressed'>
  popupProps?: {
    className?: string
  }
  onClose: () => void
  onOpen: () => void
}

const cn = classNames.bind(styles);

const outsideClickEvents = ['mousedown', 'touchstart'];

export const Dropdown: FC<DropdownProps> = (props) => {
  const {
    className,
    opened,
    buttonProps,
    popupProps,
    children,
    onClose,
    onOpen,
  } = props;
  const dropdownRef = useRef<HTMLDivElement>(null);

  const outsideClickListener = useCallback((event: Event) => {
    const element = dropdownRef?.current;

    if (!element || element.contains((event?.target as Node) || null)) {
      return;
    }

    onClose();
  }, [onClose]);

  const addOutsideClickListeners = useCallback(() => {
    outsideClickEvents.forEach((event) => {
      document.addEventListener(event, outsideClickListener, true);
    });
  }, [outsideClickListener]);

  const removeOutsideClickListeners = useCallback(() => {
    outsideClickEvents.forEach((event) => {
      document.removeEventListener(event, outsideClickListener, true);
    });
  }, [outsideClickListener]);

  useEffect(() => {
    if (opened) {
      addOutsideClickListeners();

      return removeOutsideClickListeners;
    }

    removeOutsideClickListeners();
  }, [opened, addOutsideClickListeners, removeOutsideClickListeners]);

  return (
    <div
      className={cn('root', { opened }, [className])}
      ref={dropdownRef}
    >
      <Button
        {...buttonProps}
        type="button"
        fullWidth
        pressed={opened}
        onClick={opened ? onClose : onOpen}
      />
      <div
        className={cn('popup', [popupProps?.className])}
        aria-hidden={!opened}
        role="menu"
      >
        {children}
      </div>
    </div>
  );
};
