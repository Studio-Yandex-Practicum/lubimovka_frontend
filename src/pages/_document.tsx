import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      {/* https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs */}
      <link rel="icon" href="/favicon.ico" sizes="any"/>
      <link rel="icon" href="/icon.svg" type="image/svg+xml"/>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
      <link rel="manifest" href="/manifest.webmanifest"/>
    </Head>
    <body>
      <Main/>
      <NextScript/>
    </body>
  </Html>
);

export default Document;
