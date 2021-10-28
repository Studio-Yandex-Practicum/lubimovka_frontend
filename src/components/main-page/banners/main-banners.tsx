import { FC } from 'react';
import cn from 'classnames';

import { Button } from 'components/ui/button';

import styles from './main-banners.module.css';

export const MainBanners: FC = () => {
  return (
    <section className={ cn(styles.banners) }>
      <ul className={ cn(styles.list) }>
        <li className={ cn(styles.item) }>
          <h2 className={ cn(styles.title) }>
            Премьера спектакля Ивана Вырыпаева «Солнечная линия»
          </h2>
        </li>
        <li className={ cn(styles.item) }>
          <h2 className={ cn(styles.title) }>
            Любимовка в театре «Современник»
          </h2>
        </li>
        <li className={ cn(styles.item) }>
          <h2 className={ cn(styles.title) }>
            Волонтёры Любимовки 2020 о своих впечатлениях
          </h2>
          <div className={ cn(styles.container) }>
            <div className={ cn(styles.content) }>
              <p className={ cn(styles.desc) }>
                Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.
              </p>
              <Button 
                label='читать' 
                iconPlace='left' 
                icon='arrow-right' 
                gap='4px'
                border='bottomLeft'
              />
            </div>
            <img 
              src='https://sun9-15.userapi.com/impg/BrbXevIzjABChomHzzXuKYJ0ZTWrcuhy_lQnwA/dshSQq8AJVQ.jpg?size=720x414&quality=95&sign=2ceeb729a98f8fd68fb5b4e975b6234c&type=album'
              alt='Волонтеры'
              className={ cn(styles.img) }
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

