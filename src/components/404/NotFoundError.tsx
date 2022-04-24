import Link from 'next/link';

import Logo from 'shared/images/full-logo.svg';
import SmallLogo from 'shared/images/compact-logo.svg';
import Lines from 'shared/images/404lines.svg';
import classes from './NotFoundError.module.css';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import * as breakpoints from 'shared/breakpoints';
import { Button } from 'components/ui/button';

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
              border="bottomLeft"
              isLink
              size={'s'}
              className={classes.link}
              iconPlace={'left'}
              icon={'arrow-right'}
              href={'/'}
              label={'На главную'}
            />
          </li>
          <li className={classes.listItem}>
            <Button
              border="bottomLeft"
              isLink
              size={'s'}
              className={classes.link}
              iconPlace={'left'}
              icon={'arrow-right'}
              href={'/form'}
              label={'Подать пьесу'}
            />
          </li>
          <li className={classes.listItem}>
            <Button
              border="bottomLeft"
              isLink
              size={'s'}
              className={classes.link}
              iconPlace={'left'}
              icon={'arrow-right'}
              href={'/donation'}
              label={'Поддержать'}
            />
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
