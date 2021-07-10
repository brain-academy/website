import Head from 'next/head'
import React from 'react'
import styles from "./home.module.scss"

export default function Home() {
	return <>
		<Head>
			<title>Brain Academy</title>
			<meta name="description" content="Brain Academy" />
			<link rel="icon" href="/brain-academy-logo.ico" />
		</Head>
		<div className={styles.container}>
		</div>
	</>
}
