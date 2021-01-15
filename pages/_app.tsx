import App from 'next/app'
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import theme from "./theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
