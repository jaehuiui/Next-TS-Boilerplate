import Head from "next/head";

export interface MetaProps {
	name: string;
	title: string;
	description: string;
}

/**
 * Page's MetaData with Open Graph
 * Og Props will show on sharing form
 ** default data, og:images, images size
 * @params name, title, description
 */

export default function MetaData({ name, title, description }: MetaProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />

			<meta property="og:type" content="website" />
			<meta property="og:locale" content="ko" />

			<meta property="og:site_name" content={name} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content="https://example.com/page.html" />

			<meta property="og:image" content="https://example.com/image.jpg" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
		</Head>
	);
}
