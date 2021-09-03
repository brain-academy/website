import {Flex, useColorMode} from "@chakra-ui/react"
import React, {useContext} from "react"
import {ConnectedUserContext} from "../../../context/connected-user-context"
import UserIcon from "../../user-icon"

export default function SidebarCard() {
	const {connectedUser} = useContext(ConnectedUserContext)
	const {colorMode} = useColorMode()
	return <Flex
		rounded="lg" paddingInline={4} paddingBlock={2}
		justify="space-between" align="center"
		bg={colorMode === "light" ? "gray.300" : "gray.500"}
	>
		<Flex fontWeight="bold">{connectedUser?.discord.username}</Flex>
		<UserIcon />
	</Flex>
}
