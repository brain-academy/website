import {HamburgerIcon} from '@chakra-ui/icons'
import {Flex, Spacer, Switch, useColorMode} from '@chakra-ui/react'
import {default as React} from 'react'
import ToolsMenu from './tools-menu/tools-menu'

export default function Navbar(props: {toggleSidebar: () => void}) {
	const {colorMode, toggleColorMode} = useColorMode()

	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			padding="10px 20px 10px 20px"
			borderBottom="solid 1px"
		>
			<HamburgerIcon w={8} h={8}
				style={{cursor: "pointer"}} onClick={props.toggleSidebar} />
			<Spacer />
			<Switch size="lg" paddingRight="40px" onChange={toggleColorMode} />
			<ToolsMenu />
		</Flex>
	)
}

