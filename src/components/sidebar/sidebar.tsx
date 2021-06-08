import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Radio,
	RadioGroup,
	Stack,
	useDisclosure,
	useStyles,
	useTheme,
} from "@chakra-ui/react"
import {useRouter} from 'next/router'
import React from 'react'

const drawerWidth = 240
const sidebarColor = "#202225"
const navbarColor = "#2F3136"

export default function Sidebar(props) {
	const router = useRouter()
	return (
		<div>
			<Drawer placement="left" onClose={props.closeSidebar} isOpen={props.isOpen || false}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
					<DrawerBody>
						<button onClick={() => router.push("https://brain-academy.fr/wiki/botc/")}>Wiki BotC</button>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			{props.children}
		</div>
	)
}
