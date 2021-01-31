import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

// 型が分からなかったので暫定対応
interface GlobalStypesProps {
  colorMode: "dark" | "light"
}

const styles = {
  global: (props: GlobalStypesProps) => ({
    "html, body": {
      color: props.colorMode === "dark" ? "gray.400" : "gray.600",
      lineHeight: "tall",
    }
  })
}

const theme = extendTheme({ config, styles })
export default theme
