import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-header.module.css';

import { Menu } from '../ui/menu';

interface IWhatWeDoHeaderProps {
  data: {
    id: number
    title: string
    desc: string[]
    image: string
  }
}

export const WhatWeDoHeader: FC<IWhatWeDoHeaderProps> = ({ data }): JSX.Element => {
  const { title, desc, image } = data;

  const demoItems = [
    {
      text: 'Что мы делаем',
      href: '#',
    },
    {
      text: 'Организаторы',
      href: '#',
    },
    {
      text: 'Попечители',
      href: '#',
    },
    {
      text: 'Идеология',
      href: '#',
    }
  ];
  
  return (
    <section className={ cn(styles.header) }>
      <div className={ cn(styles.content) }>
        <div className={ cn(styles.menu) }>
          <Menu type={ 'general-submenu' }>
            {demoItems.map(item => (
              <Menu.Item
                key={item.text}
                href={item.href}
              >
                {item.text}
              </Menu.Item>
            ))}
          </Menu>
        </div>
        <h1 className={ cn(styles.title) }>
          { title }
        </h1>
        <div className={ cn(styles.containerText) }>
          <p className={ cn(styles.desc) }>
            { desc[0] }
          </p>
          <p className={ cn(styles.desc) }>
            { desc[1] }
          </p>
        </div>
      </div>
      <div className={ cn(styles.container) }>
        <img src={ image } className={ cn(styles.img) } />
        <div className={ cn(styles.containerSpace) }>
          <div className={ cn(styles.containerSpaceUp) }></div>
          <div className={ cn(styles.containerSpaceDown) }></div>
        </div>
      </div>
    </section>
  );
};
