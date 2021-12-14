import { AppProps } from "next/app";
import Layout from "@temp/layout";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
