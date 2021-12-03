import React from "react";
import styles from "./label.module.scss";
import classnames from "classnames";

export interface LabelProps {
	target: string;
	name: string;
}

function FormLabel({ target, name }: LabelProps) {
	return (
		<label className={classnames(styles.main)} htmlFor={target}>
			{name}
		</label>
	);
}

export { FormLabel };