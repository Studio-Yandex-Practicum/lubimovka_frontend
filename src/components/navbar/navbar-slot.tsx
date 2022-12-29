import classNames from 'classnames/bind';

import style from './navbar.module.css';

const cx = classNames.bind(style);

enum Area {
  Actions = 'actions',
  Logotype = 'logotype',
  Addon = 'addon',
}

interface NavbarSlotProps {
  area: `${Area}`
}

export const NavbarSlot: React.FC<NavbarSlotProps> = (props) => {
  const {
    area,
    children,
  } = props;

  return (
    <div className={cx(area)}>
      {children}
    </div>
  );
};
