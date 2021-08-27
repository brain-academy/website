import {SimpleGrid} from "@chakra-ui/react"
import axios from "axios"
import {User} from "discord.js"
import React, {useContext} from "react"
import {FaHeart, FaStar} from "react-icons/fa"
import ButtonLink from "../src/components/button-link"
import MemberList from "../src/components/tile/member-list"
import {ConnectedUserContext} from "../src/context/connected-user-context"

export async function getServerSideProps() {
	const res = await axios.get("http://brain-academy.fr:3001/users")
	return await {props: {data: res.data}}
}

export default function Asso({data: users}: {data: {name: string, discord: User}[]}) {
	const {connectedUser} = useContext(ConnectedUserContext)
	console.log({connectedUser})
	return <>
		<SimpleGrid columns={3} minChildWidth={50} maxW={500} spacing={8} m={8}>
			<ButtonLink href="https://www.helloasso.com/associations/the-brain-academy/adhesions/adhesion-the-brain-academy" leftIcon={<FaStar />} bg="green.500" h={50}>
				Adhésion
			</ButtonLink>
			<ButtonLink href="https://www.helloasso.com/associations/the-brain-academy/formulaires/1" leftIcon={<FaHeart />} bg="pink.400" h={50}>
				Faire un don
			</ButtonLink>
		</SimpleGrid>
		{!!connectedUser && <MemberList data={users} />}
	</>
}
