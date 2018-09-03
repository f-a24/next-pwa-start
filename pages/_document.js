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
          <link rel="manifest" href="./static/manifest.json" />
          <meta name="theme-color" content="#000000" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="NextPWA" />
          <meta name="apple-mobile-web-app-title" content="NextPWA" />
          <meta name="msapplication-starturl" content="./" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}