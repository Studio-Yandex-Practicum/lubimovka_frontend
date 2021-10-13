import {NextPage} from 'next';
import cn from 'classnames';
import styles from './author.module.css';

import {AppLayout} from '../components/app-layout';
import {Button} from '../components/ui/button';
import {Icon} from '../components/ui/icon';


interface IAuthorPageProps {
  title: string;
  metaTitle: string;
}

const Author: NextPage<IAuthorPageProps> = (props: IAuthorPageProps) => {
  return (
    <>
      <AppLayout/>
      <div className={cn(styles.page)}>
        <div className={cn(styles.author)}>
          <section className={cn(styles.personalInfo)}>

            <div className={cn(styles.button)}>
              <Button size={'s'} iconPlace={'right'} icon={'arrow-left'} label={'Библиотека'} border={'bottomRight'} isLink={true}/>
            </div>
            <div className={cn(styles.photo)}>blablaImage</div>
            <div className={cn(styles.info)}>
              <h1 className={cn(styles.fullName)}>Екатерина Августеняк</h1>
              <p className={cn(styles.city)}>Санкт-Петербург</p>
            </div>
            <q className={cn(styles.quote)}>Жизнеутверждающая цитата</q>


            <div className={cn(styles.overviewInfo)}>
              <div className={cn(styles.overviewBlock)}>
                <div>Some overview</div>
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
            <h2 className={cn(styles.heading)}>Другие пьесы</h2>
            <ul className={cn(styles.blocks)}>
              <li className={cn(styles.block)}>
                <p className={cn(styles.paragraph)}>Камино норте</p>
                <div className={cn(styles.downloadButton)}>
                  <Button size={'s'} iconPlace={'right'} icon={'arrow-down'} label={'Скачать'} border={'none'} />
                </div>
              </li>
              <li className={cn(styles.block)}>
                <p className={cn(styles.paragraph)}>Конкретные разговоры пожилых супругов ни о чём</p>
                <div className={cn(styles.downloadButton)}>
                  <Button size={'s'} iconPlace={'right'} icon={'arrow-down'} label={'Скачать'} border={'none'} />
                </div>
              </li>
              <li className={cn(styles.block)}>
                <p className={cn(styles.paragraph)}>Камино норте</p>
                <div className={cn(styles.downloadButton)}>
                  <Button size={'s'} iconPlace={'right'} icon={'arrow-down'} label={'Скачать'} border={'none'} />
                </div>
              </li>
              <li className={cn(styles.block)}>
                <p className={cn(styles.paragraph)}>Камино норте</p>
                <div className={cn(styles.downloadButton)}>
                  <Button size={'s'} iconPlace={'right'} icon={'arrow-down'} label={'Скачать'} border={'none'} />
                </div>
              </li>
            </ul>
          </section>
          <section className={cn(styles.information)}>
            <h2 className={cn(styles.heading)}>Публикации и другие материалы</h2>
            <ul className={cn(styles.blocksInfo)}>
              <li className={cn(styles.block)}>
                <a className={cn(styles.anchor)} href={'#'}>Длинное название статьи, в которой упоминается автор, которое не помещается на одну строчку</a>
                <img className={cn(styles.arrowIcon)} alt={'arrow-right'}/>
              </li>
              <li className={cn(styles.block)}>
                <a className={cn(styles.anchor)} href={'#'}>Название статьи, в которой упоминается автор</a>
                <img className={cn(styles.arrowIcon)} alt={'arrow-right'}/>
              </li>
              <li className={cn(styles.block)}>
                <a className={cn(styles.anchor)} href={'#'}>Длинное название статьи, в которой упоминается автор, которое не помещается на одну строчку</a>
                <img className={cn(styles.arrowIcon)} alt={'arrow-right'}/>
              </li>
              <li className={cn(styles.block)}>
                <a className={cn(styles.anchor)} href={'#'}>Название статьи, в которой упоминается автор</a>
                <img className={cn(styles.arrowIcon)} alt={'arrow-right'}/>
              </li>
            </ul>
          </section>
          <section className={cn(styles.request)}>
            <div className={cn(styles.footnoteInfo)}>
              <Icon className={cn(styles.asterisk)} glyph={'asterisk'}/>
              <p className={cn(styles.footnote)}>Это ваша страница? Если вы хотите внести изменения, пожалуйста, напишите нам на autors@lubimovka.ru</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Author;
