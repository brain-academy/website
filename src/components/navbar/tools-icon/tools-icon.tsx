import {Flex, MenuButton} from '@chakra-ui/react'
import React, {useContext} from "react"
import {ConnectedUserContext} from '../../../context/connected-user-context'
import UserIcon from '../../user-icon'

export default function ToolsIcon() {
	const {connectedUser} = useContext(ConnectedUserContext)
	return <Flex align="center" justify="space-between">
		{!!connectedUser && <Flex marginRight={6}>Bienvenue, {connectedUser.discord.username}</Flex>}
		<MenuButton>
			<UserIcon />
		</MenuButton>
	</Flex>
}
