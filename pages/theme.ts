import { extendTheme } from "@chakra-ui/react"

const styles = {
  global: {
    "html, body": {
      color: "gray.600",
      lineHeight: "tall",
    }
  }
}

const theme = extendTheme({ styles })
export default theme
