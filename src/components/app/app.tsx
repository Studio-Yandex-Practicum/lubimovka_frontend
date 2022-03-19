import { AppProps } from 'next/app';

import { AppLayoutDataProvider } from 'providers/app-layout-data-provider';
import { NewsProvider } from 'providers/news-provider';
import { BlogProvider } from 'providers/blog-provider';

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppLayoutDataProvider>
      <NewsProvider>
        <BlogProvider>
          <Component {...pageProps}/>
        </BlogProvider>
      </NewsProvider>
    </AppLayoutDataProvider>
  );
};
