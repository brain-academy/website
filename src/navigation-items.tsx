import {ArrowBackIcon, ChatIcon, EditIcon, StarIcon} from "@chakra-ui/icons"
import React from "react"
import User from "./domain/user"

export interface NavigationItem {
	title: string
	link?: string
	icon?: (props) => React.ReactElement
	requiredRoles?: string[]
}

function navigationItems(user?: User): NavigationItem[] {
	return [
		{
			title: "Home",
			link: "/",
			icon: (props) => <ArrowBackIcon {...props} />
		},
		{
			title: "L'asso",
			link: "/asso",
			icon: (props) => <StarIcon {...props} />
		},
		{
			title: "Wiki",
			link: "/wiki",
			icon: (props) => <EditIcon {...props} />
		},
		{
			title: "Comm",
			link: "/comm",
			icon: (props) => <ChatIcon {...props} />,
			requiredRoles: ["Admin-Mordred"]
		}
	]
		.filter(({requiredRoles}) => !!requiredRoles ?
			requiredRoles.some(requiredRole => user?.roles.map(({name}) => name)
				.includes(requiredRole))
			: true
		)

}

export default navigationItems
