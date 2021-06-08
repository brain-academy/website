import {HamburgerIcon, LockIcon, UnlockIcon} from '@chakra-ui/icons'
import {IconButton, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import axios from 'axios'
import {useRouter} from 'next/router'
import {default as React, Dispatch, SetStateAction, useEffect, useState} from 'react'
import {login, logout} from '../../oauth/auth'
import styles from './navbar.module.scss'

const tokenUrl = 'https://discord.com/api/users/@me'

export default function Navbar(props: {toggleSidebar: () => void}) {

	const [connectedUser, setConnectedUser] = useState(null)

	useEffect(() => {
		const fragment = new URLSearchParams(window.location.hash.slice(1))
		const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')]

		if (!!accessToken) {
			axios.get(tokenUrl, {headers: {authorization: `${tokenType} ${accessToken}`}})
				.then(({data}: {data}) => setConnectedUser(data))
				.catch(console.error)
		}
	}, [])

	const router = useRouter()

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={styles.navbar}>
			<HamburgerIcon w={6} h={6} color="white" onClick={props.toggleSidebar}/>
			<Menu>
				{!!connectedUser && <label style={{display: "flex", marginRight: "20px", textAlign: "end"}}>Bienvenue, {connectedUser.username}</label>}
				<MenuButton
					as={IconButton}
					aria-label="Options"
					icon={<img src={!!connectedUser ? `https://cdn.discordapp.com/avatars/${connectedUser.id}/${connectedUser.avatar}.png` : "/brain-academy-logo.ico"} alt="TBA-logo" className={styles.roundLogo} onClick={handleClick} />}
					variant="outline"
				/>
				<MenuList>
					<MenuItem>
						{
							!connectedUser ?
								<label onClick={() => login(router)} style={{display: "inline-flex", width: "100%"}}>
									<UnlockIcon w={6} h={6} /><label style={{textAlign: "center", width: "100%", paddingRight: "20px"}}>Connexion</label>
								</label>
								:
								<label onClick={() => logout(router, () => setConnectedUser(null), () => handleClose())}><LockIcon w={6} h={6} /> Déconnexion</label>
						}
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);

}

