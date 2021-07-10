import {Drawer, DrawerBody, DrawerContent, DrawerOverlay, Stack, Switch, useColorMode} from "@chakra-ui/react"
import {useRouter} from "next/router"
import React from "react"
import theme from "../../../styles/theme"
import navigationItems from "../navigation-items"
import SidebarItem from "./sidebar-item/sidebar-item"

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
							{navigationItems.map(item => <SidebarItem key={item.title} item={item} />)}
						</Stack>
					</DrawerBody>
					<Switch size={theme.media} onChange={toggleColorMode} />
				</DrawerContent>
			</Drawer>
			{props.children}
		</>
	)
}
