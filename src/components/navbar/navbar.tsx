import {HamburgerIcon} from '@chakra-ui/icons'
import {default as React} from 'react'
import styles from './navbar.module.scss'
import ToolsMenu from './tools-menu/tools-menu'

export default function Navbar(props: {toggleSidebar: () => void}) {
	return <div className={styles.navbar}>
		<HamburgerIcon w={6} h={6} color="white" onClick={props.toggleSidebar} />
		<ToolsMenu />
	</div>
}

