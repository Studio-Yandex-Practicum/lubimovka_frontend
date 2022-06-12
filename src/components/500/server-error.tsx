import Link from 'next/link';
import Logo from 'shared/images/full-logo.svg';
import SmallLogo from 'shared/images/compact-logo.svg';
import classes from './server-error.module.css';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import * as breakpoints from 'shared/breakpoints';
import { Button } from 'components/ui/button';

export default function ServerError() {

  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  return (
    <section className={classes.error}>
      <Link href={'/'}>
        <a className={classes.logo}>
          {isMobile
            ? <SmallLogo layout={'fill'}/>
            : <Logo layout={'fill'}/>}
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
          <Button
            border="bottomLeft"
            isLink
            size={'s'}
            iconPlace={'left'}
            icon={'arrow-right'}
            href={'https://t.me/lubimovka'}
            label={'TLGRM'}
          />
        </div>
        <div className={classes.rightBlock}>
          <p className={classes.text}>
            Или перезагрузите страницу
          </p>
          <Button
            border="bottomLeft"
            size={'s'}
            iconPlace={'left'}
            icon={'arrow-right'}
            type={'button'}
            label={'Перезагрузить'}
            onClick={()=>document.location.reload()}
          />
        </div>
      </div>
    </section>
  );
}
