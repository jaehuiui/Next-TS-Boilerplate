import React from "react";
import styles from "./text.module.scss";
import classnames from "classnames";

export interface TextProps {
	contents: string;
	theme?: string;
	children?: React.ReactNode;
}

export function Bold({ contents, theme = "dark" }: TextProps) {
	return <b className={classnames(styles.bold, styles[theme])}>{contents}</b>;
}

export function Paragraph({ contents, theme = "dark", children }: TextProps) {
	return (
		<p className={classnames(styles.paragraph, styles[theme])}>
			{contents}
			{children}
		</p>
	);
}
