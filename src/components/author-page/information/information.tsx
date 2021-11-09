import React, { FC } from 'react';
import { InfoLink } from 'components/ui/info-link';

import cn from 'classnames';
import styles from './information.module.css';

interface dataList {
  id: string;
  paragraph: string;
}

interface IAuthorInformation {
  data: {
    title: string;
    list: dataList[];
  }
}

export const AuthorInformation: FC<IAuthorInformation> = ({ data }) => {
  return (
    <section className={ cn(styles.information) }>
      <h2 className={ cn(styles.heading) }>{data.title}</h2>
      <div className={ cn(styles.blocksInfo) }>
        {data.list.map((item) =>
          <div className={ cn(styles.anchorHeading) } key={item.id}>
            <InfoLink
              label={item.paragraph}
              icon='arrow-right'
              iconPlace='right'
              size='xl'
              border='borderTop'
              iconClassName={ cn(styles.anchor) }
            />
          </div>
        )}
      </div>
    </section>
  );
};
