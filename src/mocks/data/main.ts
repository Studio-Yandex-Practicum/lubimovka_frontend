import { Main } from 'api-typings';

const main: Main = {
  first_screen: {
    title: 'Открыт прием пьес на фестиваль 2021 года',
    url: 'https://lubimovks.url.ru',
    url_title: 'Заголовок для ссылки для первой страницы',
  },
  blog: {
    title: 'string',
    items: [
      {
        id: 1,
        author_url: 'http://greene.net/',
        author_url_title: 'Колобова Полина Александровна',
        description: 'Кидать советовать неожиданный факультет мотоцикл. Термин белье выдержать выдержать плод близко. Куча следовательно провал страсть райком. Что подземный низкий нож. Горький пятеро хлеб.',
        image: 'https://lubimovka.kiryanov.ru/media/images/articles/blogitems/example_OpxSu9g.jpg',
        pub_date: '2006-01-14T01:01:41',
        title: 'Иной торопливый а дьявол тревога дальний эффект',
      },
      {
        id: 2,
        author_url: 'https://mejia.info/',
        author_url_title: 'Агата Станиславовна Нестерова',
        description: 'Виднеться салон интеллектуальный. Кпсс кольцо металл снимать свежий. Сопровождаться висеть призыв монета вряд. Потянуться покидать передо выраженный витрина. Задрать актриса приятель избегать исполнять парень заявление.',
        image: 'https://lubimovka.kiryanov.ru/media/images/articles/blogitems/example_YIzWd0r.jpg',
        pub_date: '1976-12-26T06:54:13',
        title: 'Смертельный угол домашний забирать.',
      },
    ]
  },
  news: {
    title: 'string',
    items: [
      {
        id: 1,
        description: 'Кидать передо столетие еврейский угол витрина смертельный. Спалить социалистический через намерение. Что пропаганда космос собеседник. Другой даль мимо человечек очутиться тревога угроза. Девка рассуждение штаб художественный хозяйка металл.',
        image: 'https://lubimovka.kiryanov.ru/media/images/articles/newsitems/example_lJ5wCTO.jpg',
        pub_date: '1987-08-13T20:03:51',
        title: 'Зарплата правый уничтожение освобождение.',
      },
      {
        id: 2,
        description: 'Мусор господь идея отъезд волк. Выбирать сходить юный дальний рис естественный упор витрина. Коллектив демократия головка желание природа поймать. Выгнать идея пламя желание палка. Сынок гулять налоговый хлеб мелочь.',
        image: 'https://lubimovka.kiryanov.ru/media/images/articles/newsitems/example_zIL9nMV.jpg',
        pub_date: '1978-05-03T17:02:25',
        title: 'Инвалид район товар металл дрогнуть.',
      },
    ]
  },
  afisha: {
    description: 'На все читки и мастер-классы фестиваля вход свободный по предварительной регистрации.',
    title: 'Афиша событий',
    button_label: 'Полная афиша',
    items: [
      {
        date_time: '2021-12-25T13:01',
        event_body: {
          id: 1, 
          name: 'Мимо', 
          description: 'Домашний намерение исполнять засунуть. Горький пробовать роскошный легко мера ребятишки.', 
          team: {
            Драматург: ['Фаина Захаров'],
            Режиссёр: ['Фёкла Захаров'],
          },
          project_title: null,
        },
        id: 1,
        paid: true,
        place: 'Москва',
        type: 'READING',
        url: 'https://www.youtube.com/watch?v=GsRNuncp2hM',
      }
    ]
  },
  banners: {
    items: [
      {
        id: 1,
        button: 'TICKETS',
        description: 'Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.',
        image: 'https://lubimovka.kiryanov.ru/media/images/main/banner/Rectangle_138.jpg',
        title: 'Премьера спектакля Ивана Вырыпаева «Солнечная линия»',
        url: 'https://www.youtube.com/watch?v=GsRNuncp2hM',
      },
      {
        id: 2,
        button: 'DETAILS',
        description: 'Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.',
        image: 'https://lubimovka.kiryanov.ru/media/images/main/banner/Rectangle_138_9sA1e8i.jpg',
        title: 'Любимовка в театре «Современник»',
        url: 'https://www.youtube.com/watch?v=GsRNuncp2hM',
      },
      {
        id: 3,
        button: 'READ',
        description: 'Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.',
        image: 'https://lubimovka.kiryanov.ru/media/images/main/banner/Rectangle_138_AEJzmDx.jpg',
        title: 'Волонтёры Любимовки 2020 о своих впечатлениях',
        url: 'https://www.youtube.com/watch?v=GsRNuncp2hM',
      },
    ]
  },
  short_list: {
    title: 'Шорт-лист 2021 года',
    items: []
  },
  places: {
    items: [
      {
        id: 1,
        address: 'Казакова, 8, стр. 3',
        city: 'Рио-де-Жанейро',
        description: 'Основная площадка фестиваля.',
        map_link: 'https://goo.gl/maps/5iyo1zXTyVc9Tzhz9',
        name: 'Площадка «8/3»',
      },
      {
        id: 2,
        address: 'Казакова, 8, стр. 3',
        city: 'Рио-де-Жанейро',
        description: 'Три читки пьес, особо отмеченных отборщиками, пройдут в фестивальном клубе.',
        map_link: 'https://goo.gl/maps/5iyo1zXTyVc9Tzhz9',
        name: 'Арт-кафе «Смайл»',
      },
      {
        id: 3,
        address: 'Покровка, 48',
        city: 'Рио-де-Жанейро',
        description: 'Три читки пьес, особо отмеченных отборщиками, пройдут в фестивальном клубе.',
        map_link: 'https://goo.gl/maps/5iyo1zXTyVc9Tzhz9',
        name: 'Театр «Современник»',
      },
    ]
  },
  video_archive: {
    photo: 'https://lubimovka.kiryanov.ru/media/core/2021-09-30_14.37.56.jpg',
    url: 'https://lubimovks.url.ru',
  }
};
