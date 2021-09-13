import { AppProps } from 'next/app';

import 'shared/styles/palette.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
