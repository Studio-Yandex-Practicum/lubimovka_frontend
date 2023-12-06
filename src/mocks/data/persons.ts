import { faker } from '@faker-js/faker';

export const randomPersons = Array.from({ length: 30 }).map(() => faker.name.fullName());

function createRandomRole() {
  return {
    name: faker.word.noun(),
    persons: faker.helpers.arrayElements(randomPersons, faker.datatype.number({ min: 1, max: 5 }))
  };
}

export function createRandomTeam() {
  return Array.from({ length: faker.datatype.number({ min: 1, max: 3 }) }, createRandomRole);
}
