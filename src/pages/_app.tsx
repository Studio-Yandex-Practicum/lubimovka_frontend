import { AppProps, AppContext } from 'next/app';

import { fetchWrapper } from 'shared/fetch-wrapper';
import { withFetchMockQueryParams } from 'mocks/helpers/get-fetch-mock-options';

import 'keen-slider/keen-slider.min.css';
import 'shared/styles/fonts.css';
import 'shared/styles/palette.css';
import 'shared/styles/vars.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

App.getInitialProps = async ({ ctx }: AppContext)  => {
  // Получаем с бека настройки приложения
  const settings = await fetchWrapper(withFetchMockQueryParams('/settings', ctx.query));
  console.log(settings);

  return {};
};
