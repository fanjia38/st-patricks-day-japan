import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import theme from '../styles/theme'

class Document extends NextDocument {
  static getInitialProps (ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx)
  }

  render () {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
