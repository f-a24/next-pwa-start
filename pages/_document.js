import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <html lang="ja-JP">
        <Head>
          <meta charset="utf-8" />
          <title>NextPWA</title>
          <meta name="description" content="This page is NextPWA" />
          <meta name="theme-color" content="#000000" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="NextPWA" />
          <meta name="apple-mobile-web-app-title" content="NextPWA" />
          <meta name="msapplication-starturl" content="/next-pwa-start/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="apple-touch-icon" href="/next-pwa-start/static/icon-192.png" />
          <link rel="shortcut icon" href="/next-pwa-start/static/favicon.ico" />
          <link rel="manifest" href="/next-pwa-start/static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}