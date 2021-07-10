import {Box, Button} from "@chakra-ui/react"
import React, {ReactElement} from "react"
import {NavigationItem} from "../../../navigation-items"
import Link from "next/link"

export default function SidebarItem(
	{item: {title, icon, link}, closeSidebar}: {item: NavigationItem, closeSidebar: () => void}
): ReactElement {
	return (
		<Link href={link}>
			<Button
				padding={2}
				alignItems="center"
				borderRadius={10}
				justifyContent="left"
				paddingLeft={8}
				onClick={closeSidebar}
			>
				{icon({w: 5, h: 5, marginRight: 6})}
				<Box
					fontSize={20}>
					{title}
				</Box>
			</Button>
		</Link>
	)
}
