import {LockIcon, UnlockIcon} from "@chakra-ui/icons"
import {MenuItem, useToast, UseToastOptions} from "@chakra-ui/react"
import axios from "axios"
import router from "next/router"
import React, {useContext, useEffect} from "react"
import {ConnectedUserContext} from "../../../../context/connected-user-context"
import {login, logout} from "../../../../oauth/auth"

const tokenUrl = 'https://discord.com/api/users/@me'

export default function ConnectionButton() {

	const {connectedUser, setConnectedUser} = useContext(ConnectedUserContext)
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
			Promise.all(
				[
					axios.get(tokenUrl, {headers: {authorization: `${tokenType} ${accessToken}`}}),
					axios.get("https://brain-academy.fr/api/users")
				]
			)
				.then(([{data}, {data: users}]) => {
					const user = users.find(({name}) => name === data.username)
					setConnectedUser(user)
				})
				.then(() => notify({title: "Connexion réussie !"}))
				.catch(() => notify({title: "Connexion échouée...", status: "error"}))
				.catch(console.error)
		}
	}, [])

	const handleLogin = () => login(router)

	const handleLogout = () => logout(router, () => setConnectedUser(null))
		.then(() => notify({title: "Vous êtes maintenant déconnecté."}))
		.catch(() => notify({title: "Erreur lors de la déconnexion...", status: "error"}))

	return !connectedUser ?
		<MenuItem onClick={handleLogin} icon={<UnlockIcon w={6} h={6} />}>Connexion</MenuItem>
		:
		<MenuItem onClick={handleLogout} icon={<LockIcon w={6} h={6} />}>Déconnexion</MenuItem >
}
