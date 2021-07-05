export interface NavigationItem {
	title: string
	subItems?: NavigationItem[]
	link?: string
}

const navigationItems: NavigationItem[] = [
	{
		title: "L'association",
		subItems: [
			{
				title: "Adhésion",
				link: "https://www.helloasso.com/associations/the-brain-academy/adhesions/adhesion-the-brain-academy/"
			},
			{
				title: "Faire un don",
				link: "https://www.helloasso.com/associations/the-brain-academy/formulaires/1/widget"
			}
		]
	},
	{
		title: "Resources",
		subItems: [
			{
				title: "Wiki - Blood on the Clocktower",
				link: "https://brain-academy.fr/wiki/botc/"
			}
		]
	}
]

export default navigationItems
