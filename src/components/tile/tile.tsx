import {Flex, useColorMode} from "@chakra-ui/react"
import React from "react"

export default function Tile({children, ...other}: any) {
	const {colorMode} = useColorMode()
	return <Flex
		bg={colorMode === "light" ? "gray.200" : "gray.700"}
		align="center"
		m={8} p={4}
		rounded="lg"
		{...other}
	>
		{children}
	</Flex>
}
