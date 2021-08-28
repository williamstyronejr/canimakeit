import '../styles/globals.css';
import type { AppProps } from 'next/app';
import * as React from 'react';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <main className="page-main">
      <Component {...pageProps} />
    </main>
  );
}
export default MyApp;
