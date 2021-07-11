import {Flex, MenuButton} from '@chakra-ui/react'
import {User} from 'discord.js'
import React from "react"
import UserIcon from '../../user-icon'

interface ToolsIconProps {
	connectedUser?: User
}

export default function ToolsIcon({connectedUser}: ToolsIconProps) {
	return <Flex align="center" justify="space-between">
		{!!connectedUser && <Flex marginRight={6}>Bienvenue, {connectedUser.username}</Flex>}
		<MenuButton>
			<UserIcon connectedUser={connectedUser} />
		</MenuButton>
	</Flex>
}
