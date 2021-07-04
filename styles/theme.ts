import {extendTheme, ThemeConfig} from "@chakra-ui/react"

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: false,
}
const theme = extendTheme({
	config,
	media: "xs"
})
export default theme
