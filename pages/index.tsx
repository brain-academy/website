import axios from 'axios'
import Head from 'next/head'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import MiniDrawer from '../src/components/sidebar/sidebar'
import {login, logout} from '../src/oauth/auth'
const tokenUrl = 'https://discord.com/api/users/@me'

export default function Home() {
	const [connectedUser, setConnectedUser] = useState('')

	useEffect(() => {
		const fragment = new URLSearchParams(window.location.hash.slice(1))
		const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')]

		if (!!accessToken) {
			axios.get(tokenUrl, {headers: {authorization: `${tokenType} ${accessToken}`}})
				.then(({data: {username}}) => setConnectedUser(`${username}`))
				.catch(console.error)
		}
	})

	const router = useRouter()

	return (
		<div className="main">
			<div className="container">
			</div>
			<div>
				<Head>
					<title>Brain Academy</title>
					<meta name="description" content="Brain Academy" />
					<link rel="icon" href="/brain-academy-logo.ico" />
				</Head>
				<MiniDrawer></MiniDrawer>
				{!connectedUser ?
					<button onClick={() => login(router)}>login</button>
					:
					<React.Fragment>Bonjour, {connectedUser}
						<div><button onClick={() => logout(router, () => setConnectedUser(''))}>logout</button></div>
					</React.Fragment>
				}
			</div>
		</div>
	)
}
