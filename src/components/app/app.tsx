import { AppProps } from 'next/app';

import { PersistentDataProvider } from 'providers/persistent-data-provider';
import { NewsProvider } from 'providers/news-provider';
import { BlogProvider } from 'providers/blog-provider';

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
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
