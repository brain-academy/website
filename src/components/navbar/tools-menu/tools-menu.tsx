import {Menu, MenuList} from '@chakra-ui/react'
import React from "react"
import ToolsIcon from "../tools-icon/tools-icon"
import ConnectionButton from './connection-button/connection-button'

export default function ToolsMenu() {
	return (
		<Menu>
			<ToolsIcon />
			<MenuList>
				<ConnectionButton />
			</MenuList>
		</Menu>
	)
}
