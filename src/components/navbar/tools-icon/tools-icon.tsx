import {MenuButton} from '@chakra-ui/react'
import {User} from 'discord.js'
import React from "react"
import styles from './tools-icon.module.scss'

interface ToolsIconProps {
	connectedUser: User
}

export default function ToolsIcon({connectedUser}: ToolsIconProps) {
	return <span className={styles.settingsIcon}>
		{!!connectedUser && <label className={styles.iconLabel}>Bienvenue, {connectedUser.username}</label>}
		<MenuButton>
			<img src={!!connectedUser ? `https://cdn.discordapp.com/avatars/${connectedUser.id}/${connectedUser.avatar}.png` : "/brain-academy-logo.ico"}
				alt="TBA-logo"
				className={styles.roundLogo}
			/>
		</MenuButton>
	</span>
}
