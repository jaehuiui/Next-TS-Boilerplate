import React from "react";
import styles from "./heading.module.scss";
import classnames from "classnames";

export interface HeadingProps {
	contents: string;
	theme?: string;
	children?: React.ReactNode;
}

export function Heading1({ contents, theme = "dark", children }: HeadingProps) {
	return (
		<h1 className={classnames(styles.heading1, styles[theme])}>
			{contents}
			{children}
		</h1>
	);
}

export function Heading2({ contents, theme = "dark", children }: HeadingProps) {
	return (
		<h2 className={classnames(styles.heading2, styles[theme])}>
			{contents}
			{children}
		</h2>
	);
}
