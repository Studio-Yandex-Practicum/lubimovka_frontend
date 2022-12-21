import { useState, useCallback } from 'react';

import { Dropdown } from 'components/ui/dropdown';
import { Icon } from 'components/ui/icon';

interface MultipleSelectProps {
  placeholder?: string
}

export const MultipleSelect = (props: React.PropsWithChildren<MultipleSelectProps>) => {
  const {
    placeholder = 'Выбрать',
    children,
  } = props;

  const [opened, setOpened] = useState(false);

  const handleDropdownToggle = useCallback(() => {
    setOpened((opened) => !opened);
  }, []);

  return (
    <Dropdown
      opened={opened}
      buttonProps={{
        icon: (
          <Icon
            glyph="arrow-down"
            width="100%"
            height="100%"
          />
        ),
        iconPosition: 'right',
        border: 'right-bottom-left',
        children: placeholder,
      }}
      onOpen={handleDropdownToggle}
      onClose={handleDropdownToggle}
    >
      {children}
    </Dropdown>
  );
};
