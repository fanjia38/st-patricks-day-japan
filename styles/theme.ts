import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
}
const styles = {
  global: (props) => ({
    "html, body": {
      color: props.colorMode === "dark" ? "gray.400" : "gray.600",
      lineHeight: "tall",
    }
  })
}

const theme = extendTheme({ config, styles })
export default theme
