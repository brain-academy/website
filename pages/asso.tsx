import {Button, SimpleGrid} from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

export default function Asso() {
	return (
		<SimpleGrid columns={3} minChildWidth={200} spacing={8} m={8}>
			<Link href="https://www.helloasso.com/associations/the-brain-academy/adhesions/adhesion-the-brain-academy">
				<Button h={200}>Adhésion</Button>
			</Link>
			<Link href="https://www.helloasso.com/associations/the-brain-academy/formulaires/1">
				<Button h={200}>Faire un don</Button>
			</Link>
		</SimpleGrid>
	)
}
