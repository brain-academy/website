import {HamburgerIcon} from '@chakra-ui/icons'
import {default as React} from 'react'
import styles from './navbar.module.scss'
import ToolsMenu from './tools-menu/tools-menu'

export default function Navbar(props: {toggleSidebar: () => void}) {
	return <div className={styles.navbar}>
		<HamburgerIcon w={8} h={8} color="white" style={{cursor: "pointer"}} onClick={props.toggleSidebar} />
		<ToolsMenu />
	</div>
}

