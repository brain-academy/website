import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box, Drawer,
	DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader,
	DrawerOverlay
} from "@chakra-ui/react"
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {ReactElement} from 'react'
import navigationItems, {NavigationItem} from "../navigation-items"

function reduceNavigationItems({title, subItems, link}: NavigationItem, index: number): ReactElement {
	return !subItems ?
		(<>
			<AccordionItem key={title} pl={2 * index} paddingBlock={2}>
				<Link href={link}>{title}</Link>
			</AccordionItem>
		</>)
		:
		(<>
			<AccordionItem key={title} >
				<AccordionButton>
					<Box flex="1" textAlign="left">
						{title}
					</Box>
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel key={title} pb={0}>
					{subItems.map(item => reduceNavigationItems(item, index + 1))}
				</AccordionPanel>
			</AccordionItem>
		</>)
}

export default function Sidebar(props) {
	const router = useRouter()
	return (
		<>
			<Drawer placement="left" onClose={props.closeSidebar} isOpen={props.isOpen || false}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">The Brain Academy</DrawerHeader>
					<DrawerBody>
						<Accordion allowToggle allowMultiple>
							{navigationItems.map(item => reduceNavigationItems(item, 0))}
						</Accordion>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			{props.children}
		</>
	)
}
