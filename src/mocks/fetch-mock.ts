import fetchMock from 'fetch-mock';

import { addBaseUrlToApiPath } from 'shared/helpers/url';
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
  .get({ matcher: new RegExp(addBaseUrlToApiPath('/projects/\\d+')) }, project)
  .get(addBaseUrlToApiPath('/library/authors'), (<PaginatedAuthorListList>{
    results: authors,
  }))
  .get(addBaseUrlToApiPath('/library/plays'), (<PaginatedPlayList>{
    results: plays,
  }))
  .get(addBaseUrlToApiPath('/library/playfilters'), (<IPiecesFiltersProps>{
    years: playfilters.years, programs: playfilters.programs,
  }))
  .get(addBaseUrlToApiPath('/projects/'), (<PaginatedProjectListList>{
    results: projects,
  }))
  .get({ matcher: addBaseUrlToApiPath('/info/partners/'), query: { type: 'general' } }, partners.filter(({ type }) => type === 'general'))
  .get({ matcher: new RegExp(addBaseUrlToApiPath('/library/performances/\\d+')) }, performance)
  .get(addBaseUrlToApiPath('/form'), form)
  .get({ matcher: new RegExp(addBaseUrlToApiPath('/blog/\\d+')) }, blogArticle)
  .get({ matcher: new RegExp(addBaseUrlToApiPath('/news/\\d+')) }, newsArticle);

export default mockedFetch;
