import {LockIcon, UnlockIcon} from "@chakra-ui/icons"
import {useToast, UseToastOptions} from "@chakra-ui/react"
import axios from "axios"
import {User} from "discord.js"
import router from "next/router"
import React, {useEffect} from "react"
import {login, logout} from "../../../../oauth/auth"
import styles from "./connection-button.module.scss"

const tokenUrl = 'https://discord.com/api/users/@me'

export default function ConnectionButton({connectedUser, setConnectedUser, handleClose}: {connectedUser: User, setConnectedUser: (user: User) => void, handleClose: () => void}) {

	const toast = useToast()
	const notify = (
		{
			status = "success",
			duration = 5000,
			isClosable = true,
			position = "bottom-right",
			...other
		}: UseToastOptions) => toast({status, duration, isClosable, position, ...other})

	useEffect(() => {
		const fragment = new URLSearchParams(window.location.hash.slice(1))
		const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')]

		if (!!accessToken) {
			axios.get(tokenUrl, {headers: {authorization: `${tokenType} ${accessToken}`}})
				.then(({data}: {data: User}) => setConnectedUser(data))
				.then(() => notify({title: "Connexion réussie !"}))
				.catch(() => notify({title: "Connexion échouée...", status: "error"}))
				.catch(console.error)
		}
	}, [])

	const handleLogin = () => login(router)

	const handleLogout = () => logout(router, () => setConnectedUser(null), () => handleClose())
		.then(() => notify({title: "Vous êtes maintenant déconnecté."}))
		.catch(() => notify({title: "Erreur lors de la déconnexion...", status: "error"}))

	return <React.Fragment>
		{
			!connectedUser ?
				<label onClick={handleLogin} className={styles.menuItem}>
					<UnlockIcon w={6} h={6} /><label className={styles.menuLabel}>Connexion</label>
				</label>
				:
				<label onClick={handleLogout} className={styles.menuItem}>
					<LockIcon w={6} h={6} /><label className={styles.menuLabel}>Déconnexion</label>
				</label>
		}
	</React.Fragment>
}
