import fetchMock from 'fetch-mock';

import { addOriginToApiPath } from 'shared/helpers/url';

import projects from 'mocks/data/projects.json';
import partners from 'mocks/data/partners';

fetchMock.config.fallbackToNetwork = true;

const mockedFetch = fetchMock.sandbox();

mockedFetch
  .get(addOriginToApiPath('/projects'), projects)
  .get({ matcher: addOriginToApiPath('/partners'), query: { type: 'general' } }, partners.filter(({ type }) => type === 'general'));

export default mockedFetch;
