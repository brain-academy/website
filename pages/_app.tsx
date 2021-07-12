import {ChakraProvider} from '@chakra-ui/react'
import React, {useState} from 'react'
import Navbar from '../src/components/navbar/navbar'
import Sidebar from '../src/components/sidebar/sidebar'
import {ConnectedUserContext} from '../src/context/connected-user-context'
import '../styles/globals.scss'

export default function MyApp({Component, pageProps}) {

	const [isSidebarOpen, setSidebarOpen] = useState(false)
	const [connectedUser, setConnectedUser] = useState(undefined)

	const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
	const closeSidebar = () => setSidebarOpen(false)

	return <>
		<ChakraProvider>
			<ConnectedUserContext.Provider value={{connectedUser, setConnectedUser}}>
				<Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
				<Navbar toggleSidebar={toggleSidebar} />
				<Component {...pageProps} />
			</ConnectedUserContext.Provider>
		</ChakraProvider>
	</>
}
