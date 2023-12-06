import classNames from 'classnames/bind';

import style from './navbar.module.css';

interface NavbarActionsSlotProps {
  type?: 'regular' | 'main-navigation'
  as?: React.ElementType
}

const cx = classNames.bind(style);

export const NavbarActionsSlot: React.FC<NavbarActionsSlotProps> = (props) => {
  const {
    type = 'regular',
    as: Tag = 'div',
    children,
  } = props;

  return (
    <Tag className={cx(`action-slot-${type}`)}>
      {children}
    </Tag>
  );
};
