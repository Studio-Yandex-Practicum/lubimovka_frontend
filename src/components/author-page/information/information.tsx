import { FC } from 'react';
import cn from 'classnames';

import { InfoLink } from 'components/ui/info-link';

import styles from './information.module.css';

interface dataList {
  name: string,
  link: string,
  is_pinned: boolean,
  order_number: number,
}

interface IAuthorInformation {
  data: dataList[],
}

export const AuthorInformation: FC<IAuthorInformation> = ({ data }) => {
  return (
    <section className={cn(styles.information)}>
      <h2 className={cn(styles.heading)}>Публикации и другие материалы</h2>
      <div className={cn(styles.blocksInfo)}>
        {data.map((item, idx) =>
          <div className={cn(styles.anchorHeading)} key={idx}>
            <InfoLink
              label={item.name}
              href={item.link}
              icon='arrow-right'
              iconPlace='right'
              size='xl'
              border='borderTop'
              iconClassName={cn(styles.anchor)}
            />
          </div>
        )}
      </div>
    </section>
  );
};
