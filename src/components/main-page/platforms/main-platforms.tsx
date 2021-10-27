import { FC } from 'react';
import Link from 'next/link';

import cn from 'classnames';

import { Icon } from 'components/ui/icon';

import styles from './main-platforms.module.css';

interface ICard {
  id: number
  title: string
  desc: string
  link: string[]
}
interface IMainPlatformsProps {
  data: {
    id: number
    title: string
    content: ICard[]
  }
}

export const MainPlatforms: FC<IMainPlatformsProps> = ({ data }) => {
  const { title, content } = data;

  return (
    <section className={ cn(styles.section) }>
      <h2 className={ cn(styles.titleMain) }>{ title }</h2>

      <ul className={ cn(styles.list) }>
        { content.map(card => (
          <li className={ cn(styles.item) } key={ card.id }>
            { <Icon glyph='map' className={ styles.mapIcon } /> }
            <h3 className={ cn(styles.title) }>
              { card.title }
            </h3>
            <p className={ cn(styles.desc) }>
              { card.desc }
            </p>
            <Link href={ card.link[1] }>
              <a className={ cn(styles.link) }>
                <p className={ cn(styles.text) }>
                  { card.link[0] }
                </p>
                <span>{ <Icon glyph={ 'arrow-right' } fill={ 'black' } /> }</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
