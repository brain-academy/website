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
							<AccordionItem>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										L'association
									</Box>
									<AccordionIcon />
								</AccordionButton>
								<AccordionPanel pb={0}>
									<AccordionItem pl={4} paddingBlock={2}>
										<Link href="https://www.helloasso.com/associations/the-brain-academy/adhesions/adhesion-the-brain-academy/">Adhésion</Link>
									</AccordionItem>
									<AccordionItem pl={4} paddingBlock={2}>
										<Link href="https://www.helloasso.com/associations/the-brain-academy/formulaires/1/widget">Faire un don</Link>
									</AccordionItem>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Ressources
									</Box>
									<AccordionIcon />
								</AccordionButton>
								<AccordionPanel pb={0}>
									<AccordionItem pl={4} paddingBlock={2}>
										<Link href="https://brain-academy.fr/wiki/botc/">Wiki - Blood on the Clocktower</Link>
									</AccordionItem>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			{props.children}
		</>
	)
}
