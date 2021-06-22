import {Menu, MenuItem, MenuList} from '@chakra-ui/react'
import {User} from 'discord.js'
import React, {useState} from "react"
import ToolsIcon from "../tools-icon/tools-icon"
import ConnectionButton from './connection-button/connection-button'

export default function ToolsMenu() {
	const [connectedUser, setConnectedUser]: [User, (user: User) => void] = useState(null)

	const [_, setAnchorEl] = useState<null | HTMLElement>(null)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)

	return (
		<Menu>
			<ToolsIcon connectedUser={connectedUser} handleClick={handleClick} />
			<MenuList>
				<MenuItem>
					<ConnectionButton connectedUser={connectedUser} setConnectedUser={setConnectedUser} handleClose={handleClose} />
				</MenuItem>
			</MenuList>
		</Menu>
	)
}
