import {LockIcon, UnlockIcon} from '@chakra-ui/icons'
import {Menu, MenuItem, MenuList} from '@chakra-ui/react'
import {User} from 'discord.js'
import {useRouter} from "next/router"
import React, {useState} from "react"
import {login, logout} from "../../../oauth/auth"
import ToolsIcon from "../tools-icon/tools-icon"
import styles from "./tools-menu.module.scss"

export default function ToolsMenu() {
	const [connectedUser, setConnectedUser]: [User, (user: User) => void] = useState(null)
	const router = useRouter()

	const [_, setAnchorEl] = React.useState<null | HTMLElement>(null)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)

	return (
		<Menu>
			<ToolsIcon connectedUser={connectedUser} setConnectedUser={setConnectedUser} handleClick={handleClick} />
			<MenuList>
				<MenuItem>
					{
						!connectedUser ?
							<label onClick={() => login(router)} className={styles.menuItem}>
								<UnlockIcon w={6} h={6} /><label className={styles.menuLabel}>Connexion</label>
							</label>
							:
							<label onClick={() => logout(router, () => setConnectedUser(null), () => handleClose())} className={styles.menuItem}>
								<LockIcon w={6} h={6} /><label className={styles.menuLabel}>Déconnexion</label>
							</label>
					}
				</MenuItem>
			</MenuList>
		</Menu>
	)
}
