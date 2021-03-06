import {extendTheme, ThemeConfig} from "@chakra-ui/react"

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
}
const theme = extendTheme({
	config,
	media: "lg"
})
export default theme
