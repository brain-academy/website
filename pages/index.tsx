import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Head>
					<title>Brain Academy</title>
					<meta name="description" content="Brain Academy" />
					<link rel="icon" href="/brain-academy-logo.ico" />
				</Head>
			</div>
		</div>
	)
}
