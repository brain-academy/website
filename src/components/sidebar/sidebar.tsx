import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from "@chakra-ui/react"
import {useRouter} from 'next/router'
import React from 'react'

const sidebarColor = "#202225"

export default function Sidebar(props) {
	const router = useRouter()
	return (
		<div>
			<Drawer placement="left" onClose={props.closeSidebar} isOpen={props.isOpen || false}>
				<DrawerOverlay />
				<DrawerContent bgColor={sidebarColor} color="white">
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">The Brain Academy</DrawerHeader>
					<DrawerBody>
						<div>{">"} L'association</div>
						{">"} <button onClick={() => router.push("https://brain-academy.fr/wiki/botc/")}>Wiki - Blood on the Clocktower</button>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			{props.children}
		</div>
	)
}
