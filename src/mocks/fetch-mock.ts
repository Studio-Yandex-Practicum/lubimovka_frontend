import fetchMock from 'fetch-mock';

import { addOriginToApiPath } from 'shared/helpers/url';
import authors from './data/authors';
import plays from './data/plays';
import playfilters from './data/playfilters';
import projects from './data/projects';
import partners from './data/partners';
import performance from './data/performance';
import form from 'mocks/data/form';
import project from './data/project';
import { PaginatedProjectListList, PaginatedAuthorListList, PaginatedPlayList } from 'api-typings';
import { IPiecesFiltersProps } from 'pages/library';
import blogArticle from './data/blogArticle';
import newsArticle from './data/newsArticle';

fetchMock.config.fallbackToNetwork = true;

const mockedFetch = fetchMock.sandbox();

mockedFetch
  .get({ matcher: new RegExp(addOriginToApiPath('/projects/\\d+')) }, project)
  .get(addOriginToApiPath('/library/authors'), (<PaginatedAuthorListList>{
    results: authors,
  }))
  .get(addOriginToApiPath('/library/plays'), (<PaginatedPlayList>{
    results: plays,
  }))
  .get(addOriginToApiPath('/library/playfilters'), (<IPiecesFiltersProps>{
    years: playfilters.years, programs: playfilters.programs,
  }))
  .get(addOriginToApiPath('/projects/'), (<PaginatedProjectListList>{
    results: projects,
  }))
  .get({ matcher: addOriginToApiPath('/info/partners/'), query: { type: 'general' } }, partners.filter(({ type }) => type === 'general'))
  .get({ matcher: new RegExp(addOriginToApiPath('/library/performances/\\d+')) }, performance)
  .get(addOriginToApiPath('/form'), form)
  .get({ matcher: new RegExp(addOriginToApiPath('/blog/\\d+')) }, blogArticle)
  .get({ matcher: new RegExp(addOriginToApiPath('/news/\\d+')) }, newsArticle);

export default mockedFetch;
