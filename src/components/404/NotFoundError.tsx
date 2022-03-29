import Link from 'next/link';
import { useState, useEffect } from 'react';

import Logo from '../../images/logo.svg';
import SmallLogo from '../../images/small-logo.svg';
import Lines from '../../images/404lines.svg';
import classes from './NotFoundError.module.css';

export default function NotFoundError() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    const setWindowWidth = () => {
      const newWidth = document.documentElement.clientWidth;
      setScreenWidth(newWidth);
    };
    window.addEventListener('load', setWindowWidth);
    window.addEventListener('resize', setWindowWidth);
    return () => {
      window.removeEventListener('resize', setWindowWidth);
      window.removeEventListener('load', setWindowWidth);
    };
  }, []);

  return (
    <section className={classes.error}>
      <Link href={'/'}>
        <a>
          {screenWidth && screenWidth < 723 ? <SmallLogo className={classes.logo} src={'/images/small-logo.svg'} layout={'fill'}/> : <Logo className={classes.logo} src={'/images/logo.svg'} layout={'fill'}/>}
        </a>
      </Link>
      <div className={classes.contentContainer}>
        <h1 className={classes.title}>
          Ошибка 404
        </h1>
        <h2 className={classes.subtitle}>
          Кажется, такой страницы не существует
        </h2>
        <p className={classes.text}>
          Для этого может быть несколько причин: неправильный адрес, мы ее удалили, ее вообще никогда не существовало или вам это снится.
        </p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <Link href={'/'}>
              <a className={classes.link}>
                &rarr; На главную
              </a>
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link href={'/form'}>
              <a className={classes.link}>
                &rarr; Подать пьесу
              </a>
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link href={'/donation'}>
              <a className={classes.link}>
                &rarr; Поддержать
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.lines}>
        <Lines className={classes.line}/>
        <Lines className={classes.line}/>
      </div>
    </section>
  );
}
