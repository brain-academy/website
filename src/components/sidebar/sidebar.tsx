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
						<Accordion allowToggle allowMultiple>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											L'association
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<AccordionItem>
										<Link href="https://www.helloasso.com/associations/the-brain-academy/adhesions/adhesion-the-brain-academy/">Adhésion</Link>
									</AccordionItem>
									<AccordionItem>
										<Link href="https://www.helloasso.com/associations/the-brain-academy/formulaires/1/widget">Faire un don</Link>
									</AccordionItem>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											Ressources
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<Link href="https://brain-academy.fr/wiki/botc/">Wiki - Blood on the Clocktower</Link>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			{props.children}
		</div>
	)
}
