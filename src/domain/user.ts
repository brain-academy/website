export default interface User {
	name: string
	discord: {username: string, id: number, avatar?: string}
	roles: {name: string}[]
}
