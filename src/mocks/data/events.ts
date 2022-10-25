import { faker } from '@faker-js/faker';

import { createRandomTeam } from 'mocks/data/persons';

function createRandomEvent() {
  return {
    id: faker.datatype.number(),
    type: faker.helpers.arrayElement(['PERFORMANCE', 'READING', 'MASTERCLASS']),
    event_body: {
      id: faker.datatype.number(),
      name: faker.lorem.sentence(faker.datatype.number({ min: 1, max: 4 })),
      description: faker.lorem.paragraph(),
      team: createRandomTeam(),
      image: faker.image.unsplash.people(),
      project_title: null,
    },
    date_time: faker.date.soon(),
    action_url: null,
    action_text: faker.word.verb(),
  };
}

export const randomEvents = Array.from({ length: 50 }, createRandomEvent);
