// @ts-nocheck

import { Project } from 'api-typings';

import personImage from '../assets/person.jpg';
import stubImage from '../assets/stub.jpg';

const project: Project = {
  id: 2,
  title: 'Любимовка. Ещё',
  image: stubImage,
  description: 'За первый сезон проекта организаторы провели 17 мероприятий вместе с режиссёрами и актёрами московских театров: Театра.doc, Театрального Центра им. Вс. Мейерхольда, Гоголь-центра, Электротеатра «Станиславский», Ленкома.',
  contents: [
    {
      content_type: 'image',
      content_item: {
        title: 'Гифочка',
        image: stubImage.src,
      }
    },
    {
      content_type: 'imagesblock',
      content_item: {
        title: 'Блок изображений 1',
        items: [
          {
            title: 'Изображение 1',
            image: stubImage,
          },
          {
            title: 'Гифочка',
            image: stubImage,
          },
        ]
      }
    },
    {
      content_type: 'link',
      content_item: {
        title: 'Заголовок ссылки.',
        description: 'Какое-то описание ссылки',
        url: 'https://ya.ru',
      }
    },
    {
      content_type: 'videosblock',
      content_item: {
        title: 'Заголовок видео',
        items: [
          {
            title: 'Заголовок видео',
            url: 'https://www.youtube.com/embed/8CYY8EM5xYE',
          },
        ],
      },
    },
    {
      content_type: 'videosblock',
      content_item: {
        title: 'Блок видео',
        items: [
          {
            title: 'Заголовок видео',
            url: 'https://www.youtube.com/embed/8CYY8EM5xYE',
          },
          {
            title: 'Заголовок видео 2',
            url: 'https://www.youtube.com/embed/8CYY8EM5xYE',
          },
          {
            title: 'Заголовок видео 3',
            url: 'https://www.youtube.com/embed/8CYY8EM5xYE',
          },
        ]
      }
    },
    {
      content_type: 'playsblock',
      content_item: {
        title: 'Блок пьес',
        items: [
          {
            id: 1,
            created: '2021-11-06T21:48:12',
            modified: '2021-11-06T21:48:12',
            name: 'Порог',
            city: 'Ачхой Мартан',
            year: 2009,
            url_download: 'https://www.williams.info/',
            url_reading: 'http://morris-butler.com/',
            is_draft: true,
            program: 1,
            festival: 17,
          },
          {
            id: 6,
            created: '2021-11-06T21:48:29',
            modified: '2021-11-06T21:48:29',
            name: 'Пересечь',
            city: 'Мезень',
            year: 1992,
            url_download: 'http://robinson-juarez.net/',
            url_reading: 'http://fletcher.org/',
            is_draft: true,
            program: 2,
            festival: 10,
          },
          {
            id: 25,
            created: '2021-11-06T21:48:29',
            modified: '2021-11-06T21:48:29',
            name: 'Головной',
            city: 'Южноуральск',
            year: 2007,
            url_download: 'https://www.walker.com/',
            url_reading: 'http://www.spears.net/',
            is_draft: true,
            program: 1,
            festival: 16,
          },
          {
            id: 4,
            created: '2021-11-06T21:48:29',
            modified: '2021-11-06T21:48:29',
            name: 'Мелькнуть',
            city: 'Арсеньев',
            year: 1993,
            url_download: 'http://williams-reynolds.org/',
            url_reading: 'http://www.munoz.com/',
            is_draft: true,
            program: 4,
            festival: 2,
          },
          {
            id: 9,
            created: '2021-11-06T21:48:29',
            modified: '2021-11-06T21:48:29',
            name: 'Бак',
            city: 'Белореченск',
            year: 1997,
            url_download: 'http://lindsey.net/',
            url_reading: 'https://www.whitehead-gray.com/',
            is_draft: true,
            program: 1,
            festival: 8,
          },
          {
            id: 57,
            created: '2021-11-06T21:50:15',
            modified: '2021-11-06T21:50:15',
            name: 'Легко',
            city: 'Урюпинск',
            year: 2000,
            url_download: 'http://www.gomez.biz/',
            url_reading: 'https://wright.info/',
            is_draft: true,
            program: 1,
            festival: 9,
          }
        ]
      }
    },
    {
      content_type: 'personsblock',
      content_item: {
        title: 'Блок с персонами 1',
        items: [
          {
            id: 38,
            created: '2021-10-29T21:30:38',
            modified: '2021-10-29T21:30:39',
            first_name: 'Екатерина',
            last_name: 'Зиновьев',
            middle_name: 'Гурьевич',
            city: 'Гудермес',
            email: 'ekaterinazinovev@lubimovka.ru',
            image: personImage,
          },
          {
            id: 100,
            created: '2021-10-29T21:31:16',
            modified: '2021-10-29T21:31:16',
            first_name: 'Фрол',
            last_name: 'Боброва',
            middle_name: 'Гаврилович',
            city: 'Гудермес',
            email: 'frolbobrova@lubimovka.ru',
            image: personImage,
          },
          {
            id: 71,
            created: '2021-10-29T21:30:58',
            modified: '2021-10-29T21:30:59',
            first_name: 'Виктория',
            last_name: 'Артемьев',
            middle_name: 'Рудольфовна',
            city: '',
            email: null,
            image: personImage,
          },
          {
            id: 93,
            created: '2021-10-29T21:31:10',
            modified: '2021-10-29T21:31:11',
            first_name: 'Софон',
            last_name: 'Антонов',
            middle_name: 'Феоктистович',
            city: '',
            email: null,
            image: personImage,
          },
          {
            id: 66,
            created: '2021-10-29T21:30:55',
            modified: '2021-10-29T21:30:56',
            first_name: 'Петр',
            last_name: 'Гаврилова',
            middle_name: 'Захаровна',
            city: 'Старая Русса',
            email: 'petrgavrilova@lubimovka.ru',
            image: personImage,
          },
          {
            id: 26,
            created: '2021-10-29T21:30:25',
            modified: '2021-10-29T21:30:25',
            first_name: 'Бронислав',
            last_name: 'Голубева',
            middle_name: 'Васильевич',
            city: '',
            email: null,
            image: personImage,
          }
        ]
      }
    },
    {
      content_type: 'performancesblock',
      content_item: {
        title: 'Блок из спектаклей',
        items: [
          {
            id: 3,
            created: '2021-11-06T22:05:25',
            modified: '2021-11-06T22:05:25',
            name: 'Спектакль',
            main_image: 'https://lubimovka.kiryanov.ru/media/performances/giphy_0MikxV2.gif',
            bottom_image: 'https://lubimovka.kiryanov.ru/media/performances/giphy_ZoL6O6L.gif',
            video: '',
            description: 'Краткое описание',
            text: 'Полное описание',
            age_limit: 18,
            play: 2,
            event: 1,
            images_in_block: [],
            persons: [],
          },
          {
            id: 6,
            created: '2021-11-06T22:10:29',
            modified: '2021-11-06T22:10:29',
            name: 'Спектакль 2',
            main_image: 'https://lubimovka.kiryanov.ru/media/performances/giphy_PfkDSiq.gif',
            bottom_image: 'https://lubimovka.kiryanov.ru/media/performances/giphy_HYdUKNE.gif',
            video: 'http://ya.ru',
            description: 'Краткое описание спект 2',
            text: 'Полное описание спект 2',
            age_limit: 16,
            play: 1,
            event: 2,
            images_in_block: [],
            persons: [],
          }
        ]
      }
    },
    {
      content_type: 'text',
      content_item: {
        text: 'Текст это тоже простой блок текста без заголовка.',
      }
    }
  ],
  created: '',
  modified: '',
};

export default project;
