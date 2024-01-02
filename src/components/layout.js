import Head from "next/head";
import "../global.css";

export const siteTitle = "baggiiiie";

export default function Layout() {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/sticker.png" />
				<meta name="og:title" content={siteTitle} />
			</Head>
		</div>
	);
}
