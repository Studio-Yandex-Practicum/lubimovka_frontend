import { Play } from 'api-typings';

const plays: Play[] = [
  {
    'id': 1,
    'name': 'Расходные материалы',
    'authors': [{
      'id': 1,
      name: 'Екатерина Августеняк'
    }],
    'city': 'Санкт-Петербург',
    'year': 2020,
    'url_download': 'https://lubimovka.ru/',
    'url_reading': 'https://lubimovka.ru/'
  },
  {
    'id': 2,
    'name': 'Опус ДНК',
    'authors': [{
      'id': 1,
      name: 'Екатерина Августеняк'
    }],
    'city': 'Санкт-Петербург',
    'year': 2020,
    'url_download': 'https://lubimovka.ru/',
    'url_reading': 'https://lubimovka.ru/'
  },
  {
    'id': 3,
    'name': 'Про Линя',
    'authors': [{
      'id': 2,
      name: 'Борис Михайлов'
    }],
    'city': 'Москва',
    'year': 2019,
    'url_download': 'https://lubimovka.ru/',
    'url_reading': 'https://lubimovka.ru/'
  },
  {
    'id': 4,
    'name': 'МАМА',
    'authors': [{
      'id': 3,
      name: 'Матвей Иванов'
    }],
    'city': 'Казань',
    'year': 2020,
    'url_download': 'https://lubimovka.ru/',
    'url_reading': 'https://lubimovka.ru/'
  },
  {
    'id': 5,
    'name': 'Солнечная линия',
    'authors': [{
      'id': 4,
      name: 'Ольга Узенюк'
    }],
    'city': 'Чебоксары',
    'year': 2018,
    'url_download': 'https://lubimovka.ru/',
    'url_reading': 'https://lubimovka.ru/'
  }
];

export default plays;
