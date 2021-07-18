import {Button, LinkBox, LinkOverlay} from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

export default function ButtonLink({href, children, ...other}: React.PropsWithChildren<{href: string} & any>) {
	return <LinkBox>
		<Link href={href} passHref>
			<LinkOverlay>
				<Button  w="100%" {...other}>
					{children}
				</Button>
			</LinkOverlay>
		</Link>
	</LinkBox>
}
