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

  // const [articles, setArticles] = React.useState('2021');

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
        <p className={cx('paragraphConnect')}>
          Если вы хотите стать автором, пишите на&nbsp;&nbsp;
          <InfoLink
            className={cx('link')}
            label={email}
            textDecoration='underline'
          />
        </p>
      </div>
      <div className={cx('drop')}>
        <Droplist
          defaultListType='months'
          type='radio'
          defaultValue='Месяц'
          cb={([string]) => {
            setMonth(string);
          }}
          className={cx('droplistTypelistMonths')}
        />
        <Droplist
          defaultListType='years'
          type='radio'
          defaultValue='Год'
          cb={([string]) => {
            setYear(string);
          }}
          className={cx('droplistTypelistYears')}
        />
      </div>
    </section>
  );
};
