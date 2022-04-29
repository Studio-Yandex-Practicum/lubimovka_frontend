import fetchMock from 'fetch-mock';

import { addBaseUrlToApiPath } from 'shared/helpers/url';
import authors from './data/authors';
import plays from './data/plays';
import playfilters from './data/playfilters';
import projects from './data/projects';
import partners from './data/partners';
import performance from './data/performance';
import project from './data/project';
import { PaginatedProjectListList, PaginatedAuthorListList, PaginatedPlayList } from 'api-typings';
import { IPiecesFiltersProps } from 'pages/library';
import blogArticle from './data/blogArticle';
import newsArticle from './data/newsArticle';
import { afishaInfo, getAfishaEvents } from './data/afisha';
import { main } from './data/main';

fetchMock.config.fallbackToNetwork = true;

const mockedFetch = fetchMock.sandbox();

mockedFetch
  .get(addBaseUrlToApiPath('/main/'), main)
  .get(new RegExp(addBaseUrlToApiPath('/projects/\\d+')), project)
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
  .get({
    url: addBaseUrlToApiPath('/info/partners/'),
    query: { in_footer_partner: 'true' },
  }, partners.filter(({ in_footer_partner }) => in_footer_partner))
  .get(new RegExp(addBaseUrlToApiPath('/library/performances/\\d+')), performance)
  .get(new RegExp(addBaseUrlToApiPath('/blog/\\d+')), blogArticle)
  .get(new RegExp(addBaseUrlToApiPath('/news/\\d+')), newsArticle)
  .get(new RegExp(addBaseUrlToApiPath('/afisha/info')), afishaInfo)
  .get(new RegExp(addBaseUrlToApiPath('/afisha/events/')), () => getAfishaEvents());

export default mockedFetch;
