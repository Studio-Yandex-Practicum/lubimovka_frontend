import Link from 'next/link';
import { useState, useEffect } from 'react';

import Logo from '../../images/logo.svg';
import SmallLogo from '../../images/small-logo.svg';
import classes from './ServerError.module.css';
import { InfoLink } from 'components/ui/info-link';

export default function ServerError() {
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
        <h2 className={classes.subtitle}>
          Внутренняя ошибка сервера. Скоро всё починим
        </h2>
        <div className={classes.leftBlock}>
          <p className={classes.text}>
            Чтобы узнать новости фестиваля, перейдите в наш Телеграм-канал
          </p>
          <InfoLink label={'TLGRM'} isOutsideLink href={'https://t.me/'} border={'borderBottomLeft'} icon={'arrow-right'} iconPlace={'left'} size={'s'}/>
        </div>
        <div className={classes.rightBlock}>
          <p className={classes.text}>
            Или перезагрузите страницу
          </p>
          <InfoLink label={'ПЕРЕЗАГРУЗИТЬ'} border={'borderBottomLeft'} icon={'arrow-right'} iconPlace={'left'} size={'s'}/>
        </div>
      </div>
    </section>
  );
}
