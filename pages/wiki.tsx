import {Button, Image, SimpleGrid} from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

export default function Wiki() {
	return (
		<SimpleGrid columns={3} minChildWidth={200} spacing={8} m={8}>
			<Link href="https://brain-academy.github.io/botc-wiki/">
				<Button h={200}>
					<Image
						w="180px"
						h="180px"
						borderRadius={20}
						src="/images/blood-on-the-clocktower.png"
					/>
				</Button>
			</Link>
			<Button h={200} disabled>
			</Button>
			<Button h={200} disabled>
			</Button>
		</SimpleGrid>
	)
}
