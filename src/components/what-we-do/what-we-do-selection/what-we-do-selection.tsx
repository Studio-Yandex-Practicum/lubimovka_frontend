import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-selection.module.css';

// interface IWhatWeDoSelectionProps {

// }

const selectionData = [
  {
    title: 'На первом этапе каждую пьесу, читают как минимум два отборщика',
    desc: [ 'Каждый отборщик ставит пьесе оценку: «да», «нет» или «затрудняюсь с оценкой».',
      `Если пьеса получает две оценки «да», то она попадает в лонг-лист.
      В ином случае она отправляется следующим ридерам, пока в наборе оценок пьесы не появится два «да» или два «нет».`
    ],
  },
  {
    title: 'Лонг-лист пьес читают все отборщики',
    desc: [ 'Каждый отборщик ставит каждой пьесе из лонг-листа оценку: «да», «нет» или «затрудняюсь с оценкой».',
      'По совокупности этих оценок формируется шорт-лист фестиваля.'
    ],
  },
  {
    title: 'Параллельно с отбором кураторы программы Fringe читают все пьесы',
    desc: [ 'Коллегиально формируют специальную программу, для представления которой отводится отдельный день на фестивале.' ],
  },
];

export const WhatWeDoSelection: FC = (): JSX.Element => {
  return (
    <section className={ cn(styles.selection) }>
      <h2 className={ cn(styles.mainTitle) } >
        Как происходит отбор
      </h2>
      <ul className={ cn(styles.list) }>
        { selectionData.map((data, i) => {
          return (
            <li className={ cn(styles.item) } key={ i }>
              <p className={ cn(styles.number) }>
                { i + 1 }
              </p>
              <h3 className={ cn(styles.title) }>
                { data.title }
              </h3>
              <p className={ cn(styles.desc) }>
                { data.desc[0] }
              </p>
              <p className={ cn(styles.desc) }>
                { data.desc[1] && data.desc[1] }
              </p>
            </li>
          );
        })}
      </ul>
      <div className={ cn(styles.poster) }>
        <h3 className={ cn(styles.posterTitle) }>
          <span className={ cn(styles.ampersand) }>
            &
          </span>
          Помимо открытого конкурса, на который свою пьесу может прислать любой желающий
        </h3>
        <p className={ cn(styles.posterDesc) }>
          Организаторы фестиваля каждый год собирают пул новых произведений от состоявшихся драматургов и передают его куратору 
          внеконкурсной программы. Руководствуясь собственным вкусом, профессиональным опытом и представлениями о тенденциях в 
          современном театре и драматургии, куратор выбирает 6 пьес из этого пула, которые также представляются в рамках фестиваля.
        </p>
      </div>
    </section>
  );
};
