import {NextRouter} from 'next/router'

const redirectUrl = "https://discord.com/api/oauth2/authorize?client_id=818238353345478676&redirect_uri=https%3A%2F%2Fbrain-academy.fr&response_type=token&scope=identify"
const redirectUrlDev = "https://discord.com/api/oauth2/authorize?client_id=818238353345478676&redirect_uri=http%3A%2F%2Fbrain-academy.fr%3A8080&response_type=token&scope=identify"

export function login(router: NextRouter) {
	return router.push(redirectUrl)
}

export function logout(router: NextRouter, ...callback: (() => void)[]) {
	const disconnectionPromise = router.push('/')
	if (!!callback) callback.forEach(callback => callback())
		return disconnectionPromise
}
