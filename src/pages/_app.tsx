import { AppProps } from 'next/app';

import 'keen-slider/keen-slider.min.css';
import 'shared/styles/fonts.css';
import 'shared/styles/palette.css';
import 'shared/styles/vars.css';
import 'shared/styles/normalize.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
