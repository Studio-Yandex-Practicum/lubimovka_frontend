import Link from 'next/link';

import { Button } from 'components/ui/button';
import { useSettings } from 'services/api/settings-adapter';
import * as breakpoints from 'shared/breakpoints';
import { participationFormPath } from 'shared/constants/participation-form-path';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import Lines from 'shared/images/404lines.svg';
import SmallLogo from 'shared/images/compact-logo.svg';
import Logo from 'shared/images/full-logo.svg';

import classes from './NotFoundError.module.css';

export default function NotFoundError() {
  const { settings } = useSettings();
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
          {settings?.canProposePlay && (
            <li className={classes.listItem}>
              <Button
                border="bottomLeft"
                isLink
                size={'s'}
                className={classes.link}
                iconPlace={'left'}
                icon={'arrow-right'}
                href={participationFormPath}
                label={'Подать пьесу'}
              />
            </li>
          )}
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
