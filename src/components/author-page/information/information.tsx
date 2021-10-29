import { FC } from 'react';
import { Button } from 'components/ui/button';

import cn from 'classnames';
import styles from './information.module.css';

export const AuthorInformation: FC = () => {
  return (
    <section className={ cn(styles.information) }>
      <h2 className={ cn(styles.heading) }>Публикации и другие материалы</h2>
      <div className={ cn(styles.blocksInfo) }>
        <a className={ cn(styles.anchor) } href='#'>
          <p className={ cn(styles.anchorHeading) }>Длинное название статьи, в которой упоминается автор, которое не
            помещается на одну строчку</p>
          <Button className={ cn(styles.anchorButton) } size='s' iconPlace='right' icon='arrow-right' label='' border='none'/>
        </a>
        <a className={ cn(styles.anchor) } href='#'>
          <p className={ cn(styles.anchorHeading) }>Название статьи, в которой упоминается автор</p>
          <Button className={ cn(styles.anchorButton) } size='s' iconPlace='right' icon='arrow-right' label='' border='none'/>
        </a>
        <a className={ cn(styles.anchor) } href='#'>
          <p className={ cn(styles.anchorHeading) }>Длинное название статьи, в которой упоминается автор, которое не
            помещается на одну строчку</p>
          <Button className={ cn(styles.anchorButton) } size='s' iconPlace='right' icon='arrow-right' label='' border='none'/>
        </a>
        <a className={ cn(styles.anchor) } href='#'>
          <p className={ cn(styles.anchorHeading) }>Название статьи, в которой упоминается автор</p>
          <Button className={ cn(styles.anchorButton) } size='s' iconPlace='right' icon='arrow-right' label='' border='none'/>
        </a>
      </div>
    </section>
  );
};
