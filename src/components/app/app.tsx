import { AppProps as NextAppProps } from 'next/app';

import { fetcher } from 'shared/fetcher';
import { AppSettingsProvider, AppSettingsContext } from './app.context';
import { PaginatedProjectListList, Partner } from 'api-typings';

type AppProps<P = unknown> = Omit<NextAppProps, 'pageProps'> & {
  pageProps: P,
};

interface IAppInitialProps {
  contextValue: AppSettingsContext,
}

export const App = ({ Component, pageProps }: AppProps<IAppInitialProps>): JSX.Element => {
  const { contextValue, ...restPageProps } = pageProps;

  return (
    <AppSettingsProvider value={contextValue}>
      <Component {...restPageProps}/>
    </AppSettingsProvider>
  );
};

const fetchGeneralPartners = async () => {
  let data;

  try {
    data = await fetcher<Partner[]>('/info/partners/?type=general');

  } catch (error) {
    // TODO: обработать ошибку, добавим после реализации страницы ошибки

    return;
  }

  return data.map(({ name, type, url, image }) => ({
    name,
    type,
    url,
    logo: image,
  }));
};

const fetchProjects = async () => {
  let data;

  try {
    data = await fetcher<PaginatedProjectListList>('/projects/');
  } catch (error) {
    // TODO: обработать ошибку, добавим после реализации страницы ошибки

    return;
  }

  return data.results?.map(({ id, title, description, image }) => ({
    slug: id.toString(),
    title,
    description,
    image,
  }));
};

App.getInitialProps = async (): Promise<{ pageProps: IAppInitialProps }> => {
  const projects = await fetchProjects() || [];
  const generalPartners = await fetchGeneralPartners() || [];

  return {
    pageProps: {
      contextValue: {
        projects,
        generalPartners,
      }
    }
  };
};
