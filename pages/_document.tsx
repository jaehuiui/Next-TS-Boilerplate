import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta
						name="your-application-name"
						content="boilerplate-by-jaehuiui"
					/>
					<meta
						name="description"
						content="nextjs+typescript boilerplate, enjoy!"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
