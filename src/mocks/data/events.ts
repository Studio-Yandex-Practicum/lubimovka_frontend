/* eslint-disable camelcase */

import { faker } from '@faker-js/faker';

import { createRandomTeam } from 'mocks/data/persons';

function createRandomEvent() {
  return {
    id: faker.datatype.number(),
    title: faker.lorem.sentence(faker.datatype.number({ min: 1, max: 4 })),
    type: faker.helpers.arrayElement(['PERFORMANCE', 'READING', 'MASTERCLASS']),
    description: faker.lorem.paragraph(),
    image: faker.image.unsplash.people(),
    date_time: faker.date.soon(),
    location: null,
    action_url: null,
    action_text: faker.word.verb(),
    opening_date_time: faker.date.soon(),
    performance_id: null,
    team: createRandomTeam(),
  };
}

export const randomEvents = Array.from({ length: 5 }, createRandomEvent);
