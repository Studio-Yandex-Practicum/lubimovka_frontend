import fetchMock from 'fetch-mock';

import { addApiBaseUrlToPath } from 'shared/helpers/url';
import authors from './data/authors';
import plays from './data/plays';
import projects from './data/projects';
import partners from './data/partners';
import performance from './data/performance';
import project from './data/project';
import { PaginatedProjectListList, PaginatedAuthorListList, PaginatedPlayList } from 'api-typings';
import blogArticle from './data/blogArticle';
import newsArticle from './data/newsArticle';
import { afishaInfo, getAfishaEvents } from './data/afisha';
import { main } from './data/main';

fetchMock.config.fallbackToNetwork = true;

const mockedFetch = fetchMock.sandbox();

mockedFetch
  .get(addApiBaseUrlToPath('/main/'), main)
  .get(new RegExp(addApiBaseUrlToPath('/projects/\\d+')), project)
  .get(addApiBaseUrlToPath('/library/authors'), (<PaginatedAuthorListList>{
    results: authors,
  }))
  .get(addApiBaseUrlToPath('/library/plays'), (<PaginatedPlayList>{
    results: plays,
  }))
  .get(addApiBaseUrlToPath('/projects/'), (<PaginatedProjectListList>{
    results: projects,
  }))
  .get({
    url: addApiBaseUrlToPath('/info/partners/'),
    query: { in_footer_partner: 'true' },
  }, partners.filter(({ in_footer_partner }) => in_footer_partner))
  .get(new RegExp(addApiBaseUrlToPath('/library/performances/\\d+')), performance)
  .get(new RegExp(addApiBaseUrlToPath('/blog/\\d+')), blogArticle)
  .get(new RegExp(addApiBaseUrlToPath('/news/\\d+')), newsArticle)
  .get(new RegExp(addApiBaseUrlToPath('/afisha/info')), afishaInfo)
  .get(new RegExp(addApiBaseUrlToPath('/afisha/events/')), () => getAfishaEvents());

export default mockedFetch;
