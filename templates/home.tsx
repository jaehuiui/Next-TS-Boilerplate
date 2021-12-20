import React from "react";
import styles from "./home.module.scss";
import classnames from "classnames";
import Article from "@comp/organisms/article";

export default function HomeTemplate() {
	return (
		<div className={classnames(styles.wrapper)}>
			<Article />
		</div>
	);
}
