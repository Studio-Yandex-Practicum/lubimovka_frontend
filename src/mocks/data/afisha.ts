import { AfishaEventListOutput, PaginatedAfishaEventListOutputList } from 'api-typings';
import { event_type } from 'api-typings';

import { AfishaInfoOutput } from 'api-typings';

const eventTmpl: AfishaEventListOutput = {
  id: 14,
  type: 'READING',
  event_body: {
    id: 8,
    name: 'Слать',
    description: 'Каюта тесно пятеро сохранять выгнать легко монета выраженный. Шлем помолчать ставить роскошный роскошный космос миг.',
    team: [
      {
        name: 'Драматург',
        persons: [
          'Геннадий Богданов'
        ]
      },
      {
        name: 'Режиссёр',
        persons: [
          'Артем Аксенов'
        ]
      }
    ],
    project_title: 'project title',
  },
  date_time: '2022-03-30T05:43:45',
  paid: false,
  url: 'https://maxwell.com/',
  place: 'г. Шумиха, пр. Журавлева, д. 8/6, 159006'
};

function makerEvent() {
  let id = 0;

  const types: Record<number, event_type> = {
    0: 'MASTERCLASS',
    1: 'PERFORMANCE',
    2: 'READING'
  };

  return () => {
    const event = Object.assign({ id: 0 }, eventTmpl as Omit<typeof eventTmpl, 'id, event_body'>);
    event.id = id;
    event.type = types[id % 3];
    const date = new Date();
    date.setTime(date.getTime() + (id * 5 * 60 * 60 * 1000));
    event.date_time = date.toISOString();

    id++;
    return event;
  };
};

const makeEvent = makerEvent();
const dates = new Set();
const count = 15;
const results: AfishaEventListOutput[] = [];
for (let i = 0; i < 10; i++) {
  const event = makeEvent();
  dates.add(event.date_time.slice(0,10));
  results.push(event);
}

const afishaEvents: PaginatedAfishaEventListOutputList = {
  count,
  next: 'https://test.dev.lubimovka.ru/api/v1/afisha/events/?limit=10&offset=10',
  previous: null,
  results
};

export const afishaInfo: AfishaInfoOutput = {
  festival_status: true,
  description: 'На все читки и мастер-классы фестиваля вход свободный по предварительной регистрации.',
  info_registration: 'Регистрация на каждое мероприятие открывается в 12:00 предыдущего дня.',
  asterisk_text: 'После каждой читки будет проходить обсуждение с участием аудитории, автора и театральных профессионалов.',
  afisha_dates: <string[]>Array.from(dates)
};

export const getAfishaEvents =() => {
  const res = Object.assign({}, afishaEvents);
  return res;
};
