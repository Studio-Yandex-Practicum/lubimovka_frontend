import classNames from 'classnames/bind';
import styles from './section-title-for-blog.module.css';
import { Droplist } from 'components/ui/droplist/droplist';
import { Icon } from 'components/ui/icon';
import { InfoLink } from 'components/ui/info-link';
import { useEffect } from 'react';
import React from 'react';
import { MONTHS, YEARS } from 'shared/constants/months-and-years';

const cx = classNames.bind(styles);

interface ISectionTitleForBlogProps {
  email: string;
}
export const SectionTitleForBlog = (
  props: ISectionTitleForBlogProps
): JSX.Element => {
  const { email } = props;

  const [month, setMonth] = React.useState(MONTHS[new Date().getMonth()]);
  const [year, setYear] = React.useState(new Date().getFullYear().toString());

  // const [articles, setArticles] = React.useState([]);

  useEffect(() => {}, [year, month]);

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
      <div className={cx('drop')}>
        <Droplist
          data={MONTHS}
          type='radio'
          defaultValue={MONTHS[new Date().getMonth()]}
          cb={([string]) => {
            setMonth(string);
          }}
          className={cx('droplistTypelistMonths')}
        />
        <Droplist
          data={YEARS}
          type='radio'
          defaultValue={new Date().getFullYear().toString()}
          cb={([number]) => {
            setYear(number);
          }}
          className={cx('droplistTypelistYears')}
        />
      </div>
    </section>
  );
};
