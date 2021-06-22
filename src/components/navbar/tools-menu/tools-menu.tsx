import {Menu, MenuList} from '@chakra-ui/react'
import {User} from 'discord.js'
import React, {useState} from "react"
import ToolsIcon from "../tools-icon/tools-icon"
import ConnectionButton from './connection-button/connection-button'

export default function ToolsMenu() {
	const [connectedUser, setConnectedUser]: [User, (user: User) => void] = useState(null)

	return (
		<Menu>
			<ToolsIcon connectedUser={connectedUser} />
			<MenuList>
				<ConnectionButton connectedUser={connectedUser} setConnectedUser={setConnectedUser} />
			</MenuList>
		</Menu>
	)
}
