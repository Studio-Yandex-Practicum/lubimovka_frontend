import Link from 'next/link';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import * as breakpoints from 'shared/breakpoints';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import SmallLogo from 'shared/images/compact-logo.svg';
import Logo from 'shared/images/full-logo.svg';

import classes from './server-error.module.css';

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
            size='s'
            border='bottom-left'
            href={'https://t.me/lubimovka'}
            icon={(
              <Icon
                glyph="arrow-right"
                width="100%"
                height="100%"
              />
            )}
            iconPosition="left"
          >
            {'TLGRM'}
          </Button>
        </div>
        <div className={classes.rightBlock}>
          <p className={classes.text}>
            Или перезагрузите страницу
          </p>
          <Button
            size="s"
            border='bottom-left'
            type='button'
            onClick={()=>document.location.reload()}
            icon={(
              <Icon
                glyph="arrow-right"
                width="100%"
                height="100%"
              />
            )}
            iconPosition="left"
          >
            {'ПЕРЕЗАГРУЗИТЬ'}
          </Button>
        </div>
      </div>
    </section>
  );
}
