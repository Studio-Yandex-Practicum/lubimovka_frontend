import cn from 'classnames';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import type { InfoLink } from '__generated__/api-typings';

import style from './history-title.module.css';

export interface ILink {
  title: string
  linkList: InfoLink[]
}

export const HistoryTitleLink = ({ item }: {item: ILink}) => {
  return (
    <div className={style.subsection}>
      <h2 className={style.subtitle}>
        {item.title}
      </h2>
      {item.linkList.map(({ title, link }) => (
        <div className={style.buttonDisplay} key={title}>
          <Button
            size='s'
            border='none'
            href={link}
            icon={(
              <Icon
                glyph="arrow-right"
                width="100%"
                height="100%"
              />
            )}
            iconPosition='right'
            className={cn(style.button, style.link, style.subtitle)}
          >
            {title}
          </Button>
        </div>
      ))}
    </div>
  );
};
