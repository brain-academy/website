import {ChakraProvider} from '@chakra-ui/react'
import React, {useState} from 'react'
import Navbar from '../src/components/navbar/navbar'
import Sidebar from '../src/components/sidebar/sidebar'
import '../styles/globals.scss'

export default function MyApp({Component, pageProps}) {

	const [isSidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
	const closeSidebar = () => setSidebarOpen(false)

	return <div className="main">
		<ChakraProvider>
			<Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar}>
				<Navbar toggleSidebar={toggleSidebar} />
				<div className="container">
					<Component {...pageProps} />
				</div>
			</Sidebar>
		</ChakraProvider>
	</div>
}