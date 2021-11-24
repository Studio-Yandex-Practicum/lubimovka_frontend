import { FC, useState, useEffect } from 'react';

import { Icon } from '../ui/icon';

import style from './trustees-section.module.css';
import { Menu } from 'components/ui/menu';


interface TrusteesSectionProps {
  text: {
    sectionTitle: string,
    accent: string,
    link: string,
    narrative: Array<string>,
  }
}

const TrusteesSection: FC<TrusteesSectionProps> = ({ text, children }) => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const { sectionTitle, accent, link, narrative } = text;
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
      href: '/ideology',
    }
  ];

  useEffect(() => {
    setScreenWidth(document.documentElement.clientWidth);
  }, []);

  return (
    <section className={style.section}>
      {Number(screenWidth) > 729 &&
        <div className={style.menu}>
          <Menu type={'general-submenu'}>
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
      }
      <div className={style.container}>
        <div className={style.becomeTrustee}>
          <Icon glyph={'asterisk'}/>
          <p className={style.accent}>{accent}
            <a className={style.mailLink} href={`mailto:${link}`} target="_blank" rel="noreferrer">{link}</a>
          </p>
        </div>
        <div className={style.mainText}>
          <h2 className={style.title}>{sectionTitle}</h2>
          <p className={style.narrative}>{narrative}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default TrusteesSection;

