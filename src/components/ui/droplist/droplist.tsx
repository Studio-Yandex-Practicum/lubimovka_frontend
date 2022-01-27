import { FC, useEffect, useState, useCallback, useRef } from 'react';
import classNames from 'classnames/bind';

import { DroplistItems } from './droplist-items';
import { ListSelected } from './list-selected';
import { ContainerButton } from './container-button';

import styles from './droplist.module.css';

const cx = classNames.bind(styles);

export type DroplistOption = {
  value: number,
  text: string,
}
interface IDroplistProps {
  type: 'single' | 'multiple'
  options: DroplistOption[]
  selectedOptions: DroplistOption[]
  onChange: ((selectedOptions: DroplistOption) => void)
  placeholder?: string
  className?: string
}

export const Droplist: FC<IDroplistProps> = (props): JSX.Element => {
  const {
    type,
    options,
    selectedOptions,
    onChange,
    className,
    placeholder
  } = props;

  const [ activeDropdown, setActiveDropdown ] = useState(false);

  const droplistRef = useRef<HTMLDivElement>(null);

  const closeDroplist = (e: MouseEvent) => {
    const droplist = droplistRef.current;
    if(e?.target instanceof Node && droplist) {
      !droplist.contains(e.target) && setActiveDropdown(false);
    }
  };

  useEffect(() => {
    if (activeDropdown) {
      document.addEventListener('mouseup', closeDroplist);
      return;
    }
    document.removeEventListener('mouseup', closeDroplist);
  }, [activeDropdown]);

  const cbContainer = useCallback(() => {
    setActiveDropdown(state => !state);
  }, []);

  const handlerClick = (item: string, counter: number) => {
    if (type === 'single') {
      setTimeout(() => setActiveDropdown(false), 200);
    }
    onChange({ value: counter, text: item });
  };

  const handlerDeleteItem = (item: string, counter: number | undefined) => {
    counter && onChange({ value: counter, text: item });
  };

  const droplistClass = className ? className : 'droplistWidth';

  return (
    <div className={cx('droplist', droplistClass)} ref={droplistRef}>
      <ContainerButton
        cb={cbContainer}
        activeDropdown={activeDropdown}
        value={type === 'single' && selectedOptions[0].text || placeholder || 'Все'}
      />
      <div className={cx('container')}>
        <ul className={cx('list', {
          'active': activeDropdown,
        })}>
          {options.map(item =>
            <DroplistItems 
              key={item.value} 
              type={type} 
              selectList={selectedOptions} 
              value={item.text}
              handlerClick={handlerClick}
              counter={item.value}
            />)}
        </ul>
        {selectedOptions.length > 0 && type === 'multiple' && 
          <ListSelected 
            selectList={selectedOptions} 
            activeDropdown={activeDropdown} 
            handlerDeleteItem={handlerDeleteItem}
          />}
      </div>
    </div>
  );
};
