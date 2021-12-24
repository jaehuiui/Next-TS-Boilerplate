import React from "react";
import styles from "./label.module.scss";
import classnames from "classnames";

export interface LabelProps {
	target: string;
	name: string;
	theme?: string;
}

export function Label({ target, name, theme = "dark" }: LabelProps) {
	return (
		<label
			className={classnames(styles.wrapper, styles[theme])}
			htmlFor={target}
		>
			{name}
		</label>
	);
}
