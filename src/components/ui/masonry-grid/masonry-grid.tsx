import React from 'react';

import styles from './masonry-grid.module.css';
import { BlogCard } from '../blog-card';

interface MasonryGridProps {
  cardsData: { id: number; image: string; author: string; title: string; subtitle: string }[],
  // cardsData: ReadonlyArray<{ id: number; image: string; author: string; title: string; subtitle: string }[]>,
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ cardsData }) => {

  // ресайз грид-карточки
  function resizeGridItem(item: any) {
    //.masonryGrid
    const grid = document.querySelectorAll('._3OLOPd9GGOPsYE2OSWuQxU')[0];

    // получаем все стили сетки
    const gridStyles = window.getComputedStyle(grid);
    // забираем высоту строки и гэпа
    const rowHeight = parseInt(gridStyles.getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(gridStyles.getPropertyValue('grid-row-gap'));
    // console.log('grid:', grid);
    // console.log('gridStyles:', gridStyles);
    console.log('item:', item);

    console.log('rowHeight:', rowHeight);
    console.log('rowGap:', rowGap);
    console.log('item.firstChild:', item.firstChild);
    console.log('item.firstChild:', item.firstChild.getBoundingClientRect().height);

    // вычисляем нужную высоту контентной части карточки
    // обертка содержимого карточки -> получаем ее размеры -> (высота + строчный грид гэп) / (высота грид-строки + строчный грид гэп)
    // const rowSpan = Math.ceil((item.querySelector('.card').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    const rowSpan = Math.ceil((item.firstChild.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    console.log('rowSpan:', rowSpan);
    //растягиваем карточку на нужное кол-во грид-строк
    // устанавливаем в стили карточки конечную грид-строку, до которой должна растянуться карточка

    item.style.gridRowEnd = 'span ' + rowSpan;

    console.log('new grid-row-end of card:', item.style.gridRowEnd);
  }

  // ресайзим все карточки в гриде
  function resizeAllGridItems() {
    // cardLinkWrapper
    const allItems = document.querySelectorAll('._3_nhs-S-nxYnXy7PGYFj1U');
    console.log('resizeAll -> allItems:', allItems);
    for (let i = 0; i < allItems.length; i++) {
      resizeGridItem(allItems[i]);
    }
  }

  // вызываем ресайз карточек при рендере компонентов
  window.addEventListener('load', resizeAllGridItems);
  window.addEventListener('resize', resizeAllGridItems);
  // React.useEffect(() => {
  //   resizeAllGridItems();
  //   //window.addEventListener("resize", resizeAllGridItems);
  // }, [])


  return (
    <section className={styles.masonryGridSection}>
      <ul className={styles.masonryGrid}>
        {cardsData.map((card) => (
          <BlogCard
            key={card.id}
            image={card.image}
            author={card.author}
            heading={card.title}
            description={card.subtitle}
            link="https://lubimovka.ru/blog/876-int-golovanova"
          />
        )
        )}
      </ul>
    </section>
  );
};

export default MasonryGrid;
