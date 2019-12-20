/*
  eslint
    "@typescript-eslint/explicit-function-return-type": "off"
*/
import React, { ReactElement } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class AioDocument extends Document<{ styleTags: any }> {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/static/fonts/noto-sans-v9-latin-700.woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/static/fonts/noto-sans-v9-latin-regular.woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/static/fonts/benchnine-v8-latin-700.woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/static/fonts/benchnine-v8-latin-regular.woff2"
            crossOrigin="anonymous"
          />

          <link rel="icon" type="image/x-icon" href="/static/images/favicon.png" />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

AioDocument.getInitialProps = ({ renderPage }): any => {
  // Step 1: Create an instance of ServerStyleSheet
  const sheet = new ServerStyleSheet()

  // Step 2: Retrieve styles from components in the page
  const page = renderPage(App => (props): ReactElement => sheet.collectStyles(<App {...props} />))

  // Step 3: Extract the styles as <style> tags
  const styleTags = sheet.getStyleElement()

  // Step 4: Pass styleTags as a prop
  return { ...page, styleTags }
}

export default AioDocument
