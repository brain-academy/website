import {Image} from "@chakra-ui/react"
import {User} from "discord.js"

const UserIcon = ({connectedUser}: {connectedUser?: User}) => <Image
	src={!!connectedUser ? `https://cdn.discordapp.com/avatars/${connectedUser.id}/${connectedUser.avatar}.png` : "/brain-academy-logo.ico"}
	alt="TBA-logo" rounded="full" h={10} w={10} />

export default UserIcon
