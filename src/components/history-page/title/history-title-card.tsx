import cn from 'classnames';
import { ReactElement } from 'react';

import { Button } from 'components/ui/button2';
import { IIconProps } from 'components/ui/icon';

import style from './history-title.module.css';

export interface ICard {
  title: string
  count?: number
  buttonProps?: {
    [p:string]: string | ReactElement<IIconProps>
  }
}

export const HistoryTitleCard = ({ item }: {item: ICard}) => {
  return (
    <div className={cn(style.card)}>
      <div className={style.buttonDisplay}>
        <Button
          type='button'
          size='xxl'
          border='none'
          className={cn({
            [style.buttonDefault]: !item.buttonProps, 
          })}
          {...(item.count && item.buttonProps)}
        >
          {item.count ? item.count.toString() : '0'}
        </Button>
      </div>
      <p className={cn(style.element)}>
        {item.title}
      </p>
    </div>
  );
};
