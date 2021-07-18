import {Badge, Box, Button, Flex, useColorMode} from "@chakra-ui/react"
import {User} from "discord.js"
import React from "react"

export default function MemberCard({user}: {user: User}) {
	const {colorMode} = useColorMode()
	return <Button
		bg={colorMode === "light" ? "gray.100" : "gray.600"}
		h={100}
	>
		<Box overflow="hidden" m={0}>{user.username} <Badge>ADHERENT</Badge></Box>
	</Button>
}
