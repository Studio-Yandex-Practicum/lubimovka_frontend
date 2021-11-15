import classNames from 'classnames/bind';
import styles from './section-title-for-blog.module.css';
import { Droplist } from 'components/ui/droplist/droplist';
import { Icon } from 'components/ui/icon';
import { InfoLink } from 'components/ui/info-link';
import { useEffect } from 'react';
import React from 'react';

const cx = classNames.bind(styles);

interface ISectionTitleForBlogProps {
  email: string;
}
export const SectionTitleForBlog = (
  props: ISectionTitleForBlogProps
): JSX.Element => {
  const { email } = props;

  const [month, setMonth] = React.useState('Январь');
  const [year, setYear] = React.useState('2021');

  useEffect(() => {
    console.log(year, month);
  }, [year, month]);

  return (
    <section className={cx('section')}>
      <h1 className={cx('title')}>Блог Любимовки</h1>
      <div className={cx('asterisk')}>
        <Icon glyph='asterisk' />
      </div>
      <div className={cx('text')}>
        <p className={cx('paragraph')}>
          Журналисты, театроведы, критики, искусствоведы и студенты профильных
          вузов ведут журнал фестиваля Любимовка под руководством Натальи
          Дубашинской и Полины Пхор.
        </p>
        <p className={cx('paragraph-connect')}>
          Если вы хотите стать автором, пишите на&nbsp;
          <InfoLink className={cx('link')} label={email} />
        </p>
      </div>
      <div className={cx('drop')}>
        <Droplist
          className={cx('droplist')}
          defaultListType='months'
          type='radio'
          cb={([string]) => {
            setMonth(string);
          }}
        />
        <Droplist
          className={cx('droplist')}
          defaultListType='years'
          type='radio'
          cb={([string]) => {
            setYear(string);
          }}
        />
      </div>
    </section>
  );
};
