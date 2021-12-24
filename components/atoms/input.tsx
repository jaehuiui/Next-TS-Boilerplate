import React from "react";
import styles from "./input.module.scss";
import classnames from "classnames";

export interface InputProps {
	id: string;
	data: string;
	setData: (value: string) => void;
	theme?: string;
}

export function Input({ id, data, setData, theme = "dark" }: InputProps) {
	function handleData(e: any) {
		setData(e.target.value);
	}

	return (
		<input
			id={id}
			className={classnames(styles.wrapper, styles[theme])}
			value={data}
			onChange={handleData}
		/>
	);
}
