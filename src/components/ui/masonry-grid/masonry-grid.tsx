import React from 'react';

import styles from './masonry-grid.module.css';
import { BlogCard } from '../blog-card';

interface MasonryGridProps {
  cardsData: { id: number; image: string; author: string; title: string; subtitle: string; link: string; }[],
  firstCardSizeMode?: 'big' | 'regular',
  // cardsData: ReadonlyArray<{ id: number; image: string; author: string; title: string; subtitle: string }[]>,
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ cardsData, firstCardSizeMode }) => {

  // реф для доступа к грид-сетке
  const gridRef = React.useRef<HTMLUListElement>(null);

  // ресайз грид-карточки
  function resizeGridItem(item: any) {
    const grid = gridRef.current;

    // получаем все вычесленные стили грид-сетки
    const gridStyles = window.getComputedStyle(grid);

    // забираем высоту строки и гэпа из грид-сетки
    const rowHeight = parseInt(gridStyles.getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(gridStyles.getPropertyValue('grid-row-gap'));

    // вычисляем нужную высоту контентной части карточки
    // const rowSpan = Math.ceil((item.querySelector('.card').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    const rowSpan = Math.ceil((item.firstChild.offsetHeight + rowGap) / (rowHeight + rowGap));

    //растягиваем карточку на нужное кол-во грид-строк
    // устанавливаем в стили карточки конечную грид-строку, до которой должна растянуться карточка
    // item.style.gridRowEnd = 'span ' + rowSpan;
    item.style.setProperty('grid-row-end', 'span ' + rowSpan);
  }

  // ресайзим все карточки в гриде
  function resizeAllGridItems() {

    // получаем всех карточки грида через реф
    if (null !== gridRef.current) {
      const allItems = gridRef.current.children;

      for (let i = 0; i < allItems.length; i++) {
        // здесь нужно запускать ресайз только после того, как все img в карточках будут загружены браузером.
        // Иначе бывают ошибки иногда. Не знаю пока, как это сделать без сторонней библиотеки https://imagesloaded.desandro.com/
        resizeGridItem(allItems[i]);

        // после вычисления позиции всех карточек, плавно отображаем сетку,
        // чтобы не было видно, как сетка перестраивается
        if (i === allItems.length - 1) {
          gridRef.current.style.setProperty('opacity', '1');
        }
      }
    }
  }

  // вызываем ресайз карточек при рендере компонентов
  React.useLayoutEffect(() => {
    // ставим слушатель на загрузку дом-дерева и всех стилей, картинок и скриптов
    window.addEventListener('load', resizeAllGridItems);
    // на ресайз
    window.addEventListener('resize', resizeAllGridItems);
    return () => {
      window.removeEventListener('load', resizeAllGridItems);
      window.removeEventListener('resize', resizeAllGridItems);
    };
  }, []);

  return (
    <section className={styles.masonryGridSection}>
      <ul className={styles.masonryGrid} ref={gridRef}>
        {cardsData.map((card) => (
          <BlogCard
            key={card.id}
            image={card.image}
            author={card.author}
            heading={card.title}
            description={card.subtitle}
            link={card.link}
            firstCardSizeMode={firstCardSizeMode}
          />
        )
        )}
      </ul>
    </section>
  );
};

export default MasonryGrid;
