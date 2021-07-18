import {Heading, SimpleGrid, StackDivider, VStack} from "@chakra-ui/react"
import {User} from "discord.js"
import React from "react"
import MemberCard from "./member-card"
import Tile from "./tile"

export default function MemberList({data: users}: {data: {name: string, discord: User}[]}) {
	return <Tile>
		<VStack w="100%" align="stretch" divider={<StackDivider borderColor="gray.200" />}>
			<Heading>Membres</Heading>
			<SimpleGrid gap={4} columns={2} marginBlock={4}>
				{users.map(({discord}) => <MemberCard key={discord.id} user={discord} />)}
			</SimpleGrid>
		</VStack>
	</Tile>
}
