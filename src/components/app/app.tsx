import { AppProps } from 'next/app';

import { PersistentDataProvider } from 'providers/persistent-data-provider';
import { NewsProvider } from 'providers/news-provider';
import { BlogProvider } from 'providers/blog-provider';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('mocks').then(({ setupMocks }) => setupMocks());
}

export const App = ({ Component, pageProps }: AppProps) => {
  const {
    preloadedNewsState,
    ...restPageProps
  } = pageProps;

  return (
    <PersistentDataProvider>
      <NewsProvider preloadedNewsState={preloadedNewsState}>
        <BlogProvider>
          <Component {...restPageProps}/>
        </BlogProvider>
      </NewsProvider>
    </PersistentDataProvider>
  );
};
