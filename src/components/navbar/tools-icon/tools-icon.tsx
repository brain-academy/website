import {Flex, Image, MenuButton} from '@chakra-ui/react'
import {User} from 'discord.js'
import React from "react"

interface ToolsIconProps {
	connectedUser: User
}

export default function ToolsIcon({connectedUser}: ToolsIconProps) {
	return <Flex alignItems="center" justifyContent="space-between">
		{!!connectedUser && <Flex marginRight={6}>Bienvenue, {connectedUser.username}</Flex>}
		<MenuButton>
			<Image
				src={!!connectedUser ? `https://cdn.discordapp.com/avatars/${connectedUser.id}/${connectedUser.avatar}.png` : "/brain-academy-logo.ico"}
				alt="TBA-logo"
				borderRadius="50%"
				h={10}
				w={10}
			/>
		</MenuButton>
	</Flex>
}
