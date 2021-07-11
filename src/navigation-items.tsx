import {ArrowBackIcon, EditIcon, StarIcon} from "@chakra-ui/icons"
import React from "react"

export interface NavigationItem {
	title: string
	link?: string,
	icon?: (props) => React.ReactElement
}

const navigationItems: NavigationItem[] = [
	{
		title: "Home",
		link: "/",
		icon: (props) => <ArrowBackIcon {...props} />
	},
	{
		title: "L'asso",
		link: "/asso",
		icon: (props) => <StarIcon {...props} />
		// subItems: [
		// 	{
		// 		title: "Adhésion",
		// 		link: "https://www.helloasso.com/associations/the-brain-academy/adhesions/adhesion-the-brain-academy/"
		// 	},
		// 	{
		// 		title: "Faire un don",
		// 		link: "https://www.helloasso.com/associations/the-brain-academy/formulaires/1/widget"
		// 	}
		// ]
	},
	{
		title: "Wiki",
		link: "/wiki",
		icon: (props) => <EditIcon {...props} />
	}
]

export default navigationItems
