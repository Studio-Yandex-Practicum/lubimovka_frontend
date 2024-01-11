import Link from 'next/link';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import * as breakpoints from 'shared/breakpoints';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import Lines from 'shared/images/404lines.svg';
import SmallLogo from 'shared/images/compact-logo.svg';
import Logo from 'shared/images/full-logo.svg';

import classes from './NotFoundError.module.css';

export default function NotFoundError() {
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
        <h1 className={classes.title}>
          Ошибка 404
        </h1>
        <h2 className={classes.subtitle}>
          Кажется, такой страницы не существует
        </h2>
        <p className={classes.text}>
          Для этого может быть несколько причин: неправильный адрес, мы ее удалили, ее вообще никогда не существовало
          или вам это снится.
        </p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <Button
              size="s"
              border='bottom-left'
              href={'/'}
              icon={(
                <Icon
                  glyph="arrow-right"
                  width="100%"
                  height="100%"
                />
              )}
              iconPosition="left"
            >
              {'НА ГЛАВНУЮ'}
            </Button>
          </li>
          <li className={classes.listItem}>
            <Button
              size="s"
              border='bottom-left'
              href={'/donation'}
              icon={(
                <Icon
                  glyph="arrow-right"
                  width="100%"
                  height="100%"
                />
              )}
              iconPosition="left"
            >
              {'ПОДДЕРЖАТЬ'}
            </Button>
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
