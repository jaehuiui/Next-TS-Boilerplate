import React from "react";
import styles from "./article.module.scss";
import classnames from "classnames";
import { Heading1, Heading2, Bold, Paragraph } from "@comp";

export function Article() {
	return (
		<article className={classnames(styles.wrapper)}>
			<Heading1 contents={"Heading1 Component"} />
			<Heading2 contents={"Heading2 Component, "}>
				<Bold contents={"Bold Text Component"} />
			</Heading2>
			<Paragraph contents={"Paragraph Component"} />
		</article>
	);
}
