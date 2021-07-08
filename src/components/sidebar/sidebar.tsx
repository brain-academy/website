import {
	Box, Drawer,
	DrawerBody, DrawerContent, DrawerOverlay,
	Flex, Stack,
	Switch,
	useColorMode
} from "@chakra-ui/react"
import {useRouter} from 'next/router'
import React, {ReactElement} from 'react'
import theme from "../../../styles/theme"
import navigationItems, {NavigationItem} from "../navigation-items"

function sidebarItem({title, link, icon}: NavigationItem, index: number): ReactElement {
	return (
		<Flex paddingTop={4} alignItems="center">
			{icon({w: 5, h: 5, marginRight: 6})}
			<Box
				fontSize={20}>
				{title}
			</Box>
		</Flex>
	)
}

export default function Sidebar(props) {
	const router = useRouter()
	const {colorMode, toggleColorMode} = useColorMode()
	return (
		<>
			<Drawer placement="left" onClose={props.closeSidebar} isOpen={props.isOpen || false}>
				<DrawerOverlay />
				<DrawerContent padding={5}>
					<DrawerBody>
						<Stack>
							{navigationItems.map(item => sidebarItem(item, 0))}
						</Stack>
					</DrawerBody>
					<Switch size={theme.media} onChange={toggleColorMode} />
				</DrawerContent>
			</Drawer>
			{props.children}
		</>
	)
}
