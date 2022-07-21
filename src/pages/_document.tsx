import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en' className='dark'>
        <Head>
          <link href='/favicons/bemfaksaintek.ico' rel='shortcut icon' />
          <meta content='#ffffff' name='theme-color' />
          <meta content='#ffffff' name='msapplication-TileColor' />
          <meta
            content='/favicons/browserconfig.xml'
            name='msapplication-config'
          />
        </Head>
        <body className='dark:highlight-white/5 bg-neutral-100 text-slate-900 antialiased dark:bg-gray-800 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
