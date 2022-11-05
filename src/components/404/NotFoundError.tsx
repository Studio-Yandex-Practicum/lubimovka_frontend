import Link from 'next/link';

import Logo from 'shared/images/full-logo.svg';
import SmallLogo from 'shared/images/compact-logo.svg';
import Lines from 'shared/images/404lines.svg';
import classes from './NotFoundError.module.css';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import * as breakpoints from 'shared/breakpoints';
import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';
import { usePersistentData } from 'providers/persistent-data-provider';
import { participationFormPath } from 'shared/constants/participation-form-path';

export default function NotFoundError() {
  const { settings } = usePersistentData();
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
              border="bottom-left"
              className={classes.link}
              icon={(
                <Icon
                  glyph="arrow-right"
                  width="100%"
                  height="100%"
                />
              )}
              iconPosition="left"
              href="/"
            >
              На главную
            </Button>
          </li>
          {settings?.canProposePlay && (
            <li className={classes.listItem}>
              <Button
                size="s"
                border="bottom-left"
                className={classes.link}
                icon={(
                  <Icon
                    glyph="arrow-right"
                    width="100%"
                    height="100%"
                  />
                )}

                iconPosition="left"
                href={participationFormPath}
              >
                Подать пьесу
              </Button>
            </li>
          )}
          <li className={classes.listItem}>
            <Button
              size="s"
              border="bottom-left"
              className={classes.link}
              icon={(
                <Icon
                  glyph="arrow-right"
                  width="100%"
                  height="100%"
                />
              )}
              iconPosition="left"
              href="/donation"
            >
              Поддержать
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
