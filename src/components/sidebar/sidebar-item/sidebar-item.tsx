import {Box, Button, Flex, useStyleConfig} from "@chakra-ui/react"
import React, {ReactElement} from "react"
import {NavigationItem} from "../../navigation-items"

export default function SidebarItem(
	{item: {title, icon, link}, index}: {item: NavigationItem, index: number}
): ReactElement {
	return (
		<Button padding={2} alignItems="center" borderRadius={10} justifyContent="left" paddingLeft={8}>
			{icon({w: 5, h: 5, marginRight: 6})}
			<Box
				fontSize={20}>
				{title}
			</Box>
		</Button>
	)
}
