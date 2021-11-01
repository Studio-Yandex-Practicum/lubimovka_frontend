import { AppProps as NextAppProps } from 'next/app';

import { fetcher } from 'shared/fetcher';
import { AppSettingsProvider, AppSettingsContext } from './app.context';

import type { Project, Partner } from 'shared/types';

type AppProps<P = unknown> = Omit<NextAppProps, 'pageProps'> & {
  pageProps: P,
};

interface IAppInitialProps {
  contextValue: AppSettingsContext,
}

export const App = ({ Component, pageProps }: AppProps<IAppInitialProps>): JSX.Element => {
  const { contextValue } = pageProps;

  return (
    <AppSettingsProvider value={contextValue}>
      <Component/>
    </AppSettingsProvider>
  );
};

App.getInitialProps = async (): Promise<{ pageProps: IAppInitialProps }> => {
  const projects = await fetcher<Project[]>('/projects');
  const generalPartners = await fetcher<Partner[]>('/partners?type=general');

  return {
    pageProps: {
      contextValue: {
        projects,
        generalPartners,
      }
    }
  };
};
