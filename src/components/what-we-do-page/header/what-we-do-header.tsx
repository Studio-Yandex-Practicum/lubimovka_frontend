import { FC } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import { Menu } from 'components/ui/menu';
import { navbarNavigationItems, INavbar } from 'shared/constants/navbar-navigation-items';

import styles from './what-we-do-header.module.css';

interface IWhatWeDoHeaderProps {
  data: {
    id: number
    title: string
    desc: string[]
    image: {
      url: string
      alt: string
    }
  }
}

export const WhatWeDoHeader: FC<IWhatWeDoHeaderProps> = ({ data }): JSX.Element => {
  const { title, desc, image } = data;

  const router = useRouter();
  
  return (
    <section className={ cn(styles.header) }>
      <div className={ cn(styles.content) }>
        <div className={ cn(styles.menu) }>
          <Menu type={ 'general-submenu' }>
            {navbarNavigationItems.map((list: INavbar) => (
              <Menu.Item
                key={list.id}
                href={list.href}
                current={ router.asPath === list.href }
              >
                {list.text}
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
        <img 
          src={ image.url } 
          className={ cn(styles.img) }
          alt={ image.alt }
        />
        <div className={ cn(styles.containerSpace) }>
          <div className={ cn(styles.containerSpaceUp) } />
          <div className={ cn(styles.containerSpaceDown) } />
        </div>
      </div>
    </section>
  );
};
