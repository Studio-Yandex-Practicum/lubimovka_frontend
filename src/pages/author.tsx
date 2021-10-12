import { NextPage } from 'next';
import cn from 'classnames';

import styles from './author.module.css';

interface IAuthorPageProps {
  title: string;
  metaTitle: string;
}

const Author: NextPage<IAuthorPageProps> = (props: IAuthorPageProps) => {
  return (
    <div className={cn(styles.page)}>
      <div className={cn(styles.author)}>
        <section className={cn(styles.personalInfo)}>
          <div className={cn(styles.fullName)}>
            <div className={cn(styles.button)}>Библиотека</div>
            <div className={cn(styles.photo)}>blablaImage</div>
            <div className={cn(styles.info)}>
              <h1 className={cn(styles.name)}>bla</h1>
              <p className={cn(styles.city)}>Санкт-Петербург</p>
            </div>
            <q className={cn(styles.quote)}>Жизнеутверждающая цитата</q>
          </div>
          <div>
            <div className={cn(styles.overviewBlock)}>
              <div>overviewBlock</div>
            </div>
            <aside className={cn(styles.overviewContacts)}>
              <div>
                <h2>Достижения</h2>
                <div>Tag</div>
                <div>Tag</div>
                <div>Tag</div>
              </div>
              <div>
                <h2>Социальные сети</h2>
                <a>Fb</a>
                <a>Vk</a>
              </div>
              <div>
                <p>E-mail для связи</p>
                <a>e-mail@e.mail</a>
              </div>
            </aside>
          </div>
        </section>
        <section className={cn(styles.plays)}>Просто добавь компонент с пьесами!</section>
        <section className={cn(styles.anotherPlays)}>
          <h2>Другие пьесы</h2>
          <div>
            <p>Камино норте</p>
            <button>Скачать</button>
          </div>
          <div>
            <p>Конкретные разговоры пожилых супругов ни о чём</p>
            <button>Скачать</button>
          </div>
          <div>
            <p>Камино норте</p>
            <button>Скачать</button>
          </div>
          <div>
            <p>Конкретные разговоры пожилых супругов ни о чём</p>
            <button>Скачать</button>
          </div>
        </section>
        <section className={cn(styles.information)}>
          <h2>Публикации и другие материалы</h2>
          <a>Длинное название статьи, в которой упоминается автор, которое не помещается на одну строчку</a>
          <a>Название статьи, в которой упоминается автор</a>
          <a>Название статьи, в которой упоминается автор</a>
          <a>Название статьи, в которой упоминается автор</a>
        </section>
        <section className={cn(styles.request)}>
          <p>Asterisk Icon</p>
          <p>Это ваша страница? Если вы хотите внести изменения, пожалуйста,  напишите нам на autors@lubimovka.ru</p>
        </section>
      </div>
    </div>
  );
};

export default Author;
