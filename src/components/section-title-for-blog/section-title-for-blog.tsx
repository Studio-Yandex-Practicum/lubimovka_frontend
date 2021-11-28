import classNames from 'classnames/bind';
import React, { useEffect } from 'react';

import { Icon } from 'components/ui/icon';
import { InfoLink } from 'components/ui/info-link';
import MonthsAndYearsFilter from '../months-and-years-filter/months-and-years-filter';

import styles from './section-title-for-blog.module.css';

const cx = classNames.bind(styles);

interface ISectionTitleForBlogProps {
  email: string;
}
export const SectionTitleForBlog = (
  props: ISectionTitleForBlogProps
): JSX.Element => {
  const { email } = props;

  const [month, setMonth] = React.useState<number>();
  const [year, setYear] = React.useState<number>();

  // const [articles, setArticles] = React.useState([]);

  useEffect(() => {
    // console.log(`месяц: ${month}, год: ${year}`);
  }, [year, month]);

  return (
    <section className={cx('section')}>
      <h1 className={cx('title')}>Блог Любимовки</h1>
      <div className={cx('asterisk')}>
        <Icon glyph='asterisk' width='100%' height='100%' fill='var(--coal)'/>
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
      <MonthsAndYearsFilter
        className={cx('drop')}
        filterCallBack={(month, year) => {
          setMonth(month);
          setYear(year);
        }}/>
    </section>
  );
};
