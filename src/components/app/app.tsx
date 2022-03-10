import { AppProps } from 'next/app';

import { AppLayoutDataProvider } from 'providers/app-layout-data-provider';
import { NewsProvider } from 'providers/news-provider';

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppLayoutDataProvider>
      <NewsProvider>
        <Component {...pageProps}/>
      </NewsProvider>
    </AppLayoutDataProvider>
  );
};
