import {IconButton, MenuButton} from '@chakra-ui/react'
import axios from 'axios'
import {User} from 'discord.js'
import React, {useEffect} from "react"
import styles from './tools-icon.module.scss'

const tokenUrl = 'https://discord.com/api/users/@me'

interface ToolsIconProps {
	connectedUser: User,
	setConnectedUser: (user: User) => void,
	handleClick: (event: React.MouseEvent<HTMLElement>) => void
}

export default function ToolsIcon({connectedUser, setConnectedUser, handleClick}: ToolsIconProps) {

	useEffect(() => {
		const fragment = new URLSearchParams(window.location.hash.slice(1))
		const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')]

		if (!!accessToken) {
			axios.get(tokenUrl, {headers: {authorization: `${tokenType} ${accessToken}`}})
				.then(({data}: {data: User}) => setConnectedUser(data))
				.catch(console.error)
		}
	}, [])

	return <span className={styles.settingsIcon}>
		{!!connectedUser && <label className={styles.iconLabel}>Bienvenue, {connectedUser.username}</label>}
		<MenuButton onClick={handleClick}>
			<img src={!!connectedUser ? `https://cdn.discordapp.com/avatars/${connectedUser.id}/${connectedUser.avatar}.png` : "/brain-academy-logo.ico"}
				alt="TBA-logo"
				className={styles.roundLogo}
			/>
		</MenuButton>
	</span>
}
