import fetchMock from 'fetch-mock';

import { addOriginToApiPath } from 'shared/helpers/url';

import projects from './data/projects.json';
import partners from './data/partners';
import performance from './data/performance';

fetchMock.config.fallbackToNetwork = true;

const mockedFetch = fetchMock.sandbox();

mockedFetch
  .get(addOriginToApiPath('/projects'), projects)
  .get({ matcher: addOriginToApiPath('/partners'), query: { type: 'general' } }, partners.filter(({ type }) => type === 'general'))
  .get({ matcher: new RegExp(addOriginToApiPath('/library/performances/\\d+')) }, performance);

export default mockedFetch;
