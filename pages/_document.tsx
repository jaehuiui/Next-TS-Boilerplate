import Document, { Html, Head, Main, NextScript } from "next/document";
import { Config } from "@lib/utils/config";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang={Config.locale}>
				<Head>
					<meta name="application-name" content={Config.siteName} />
					<meta name="description" content={Config.description} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
