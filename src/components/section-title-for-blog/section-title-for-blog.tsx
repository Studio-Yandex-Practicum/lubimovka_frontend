import classNames from 'classnames/bind';
import styles from './section-title-for-blog.module.css';
import { Droplist } from 'components/ui/droplist/droplist';
import { Icon } from 'components/ui/icon';

const cx = classNames.bind(styles);

interface ISectionTitleForBlogProps {
  title: string,
}
export const SectionTitleForBlog = (props: ISectionTitleForBlogProps): JSX.Element => {
  const {
    title,
  } = props;
  return (
    <section className={cx('section')}>
      <h1 className={cx('title')}>{title}</h1>
      <div className={cx('asterisk')}>
        <Icon glyph='asterisk' />
      </div>
      <div className={cx('text')}>
        <p className={cx('paragraph')}>Журналисты, театроведы, критики, искусствоведы и студенты профильных вузов ведут журнал фестиваля Любимовка под руководством Натальи Дубашинской и Полины Пхор.</p>
        <p className={cx('paragraph-connect')}>Если вы хотите стать автором, пишите
          на&nbsp;<a href='#' className={cx('link')}>critics@lubimovka.ru</a>
        </p>
      </div>
      <div className={cx('drop')}>
        <Droplist
          type='months'
          cb={string => {
            console.log(string);
          }}
          maxWidth={240}
        />
        <Droplist
          type='years'
          cb={string => {
            console.log(string);
          }}
          maxWidth={150}
        />
      </div>

    </section>
  );
};
