import React from "react";
import styles from "./article.module.scss";
import classnames from "classnames";
import { H1 } from "@comp/atoms/heading";

export default function Article() {
	return (
		<article className={classnames(styles.wrapper)}>
			<H1 contents={"Article's Title"} />
		</article>
	);
}