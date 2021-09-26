import { NextPage } from 'next';
import cn from 'classnames';

import TextItem from './text-item/text-item';

import style from './ideology.module.css';

const Ideology: NextPage = () => (
  <div className={style.page}>
    <section className={style.section}>
      <article className={cn(style.picture, style.picture_actors)} />
      <div className={style.container}>
        <div className={cn(style.list, style.list_shift_right)}>
          <p className={cn(style.paragraph, style.numberBox)}>1</p>
          <h2 className={cn(style.title, style.titleBox)}>Мы твердо верим, что</h2>

          <TextItem number='1.1' title='Театр может и должен помогать обществу осмыслять меняющуюся реальность внутри и вокруг человека'>
            <p className={cn(style.paragraph, style.paragraph_text)}>Театр сегодня является не только уникальным искусством с неисчерпаемыми художественными возможностями, но и важнейшим общественным явлением. Сегодня театр может и должен быть пространством эмоциональной, интеллектуальной и духовной коммуникации между людьми, помогать вырабатывать пути преодоления вечных противоречий и новых трудностей и находить силы для того, чтобы следовать этими путями.</p>
          </TextItem>

          <TextItem number='1.2' title='Драматург является одной из ключевых фигур современного театра'>
            <p className={cn(style.paragraph, style.paragraph_text)}>Мы знаем, что драматург может и должен создавать пьесы, способные вовлечь и зрителя, и участника творческого процесса  в дискуссию о самых животрепещущих вопросах жизни человека и общества. Внимание профессионального сообщества к новой работе и живая реакция аудитории важны не только начинающим авторам, но и признанным драматургам.</p>
            <p className={cn(style.paragraph, style.paragraph_text)}>Мы верим в профессионализм, но знаем, что мастерством владения драматургическими приёмами можно овладеть только продолжая писать.</p>
          </TextItem>

          <TextItem number='1.3' title='Театр должен быть открытым и постоянно обновляться'>
            <p className={cn(style.paragraph, style.paragraph_text)}>Мы верим, что преемственность и контраст поколений делают театр глубже. Мы верим, что вызовы, которые молодой автор бросает театру, позволяют театру оставаться живым и востребованным.</p>
          </TextItem>
        </div>
      </div>
    </section>

    <section className={cn(style.section, style.section_second)}>
      <article className={cn(style.picture, style.picture_audience)} />
      <div className={cn(style.container, style.container_second)}>
        <div className={style.list}>
          <p className={cn(style.paragraph, style.numberBox)}>2</p>
          <h2 className={cn(style.title, style.titleBox)}>Мы искренне хотим</h2>

          <TextItem number='2.1' title='Открывать театральному миру новых авторов. '>
            <p className={cn(style.paragraph, style.paragraph_text)}>Чтобы наш фестиваль служил местом встречи начинающих авторов и признанных драматургов, зрителей и театральных профессионалов, представителей разных поколений и художественных течений.</p>
          </TextItem>

          <TextItem number='2.2' title='Дать начинающим авторам возможность найти свой голос и быть услышанными'>
            <p className={cn(style.paragraph, style.paragraph_text)}>Чтобы уже в начале своего творческого пути драматурги получали опыт взаимодействия с аудиторией и театральными профессионалами и совершенствовали своё мастерство. Вдохновлять молодых авторов на написание новых пьес.</p>
          </TextItem>

          <TextItem number='2.3' title='Обогатить отечественный театр качественными новыми актуальными пьесами'>
            <p className={cn(style.paragraph, style.paragraph_text)}>Чтобы наш фестиваль был оживленным перекрестком мнений и взглядов, в центре которого — новые пьесы, говорящие о сегодняшних реалиях и ценностях, которые составляют основу жизни современного человека и общества.</p>
          </TextItem>
        </div>
      </div>
    </section>
  </div>
);

export default Ideology;
