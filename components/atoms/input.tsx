import React from "react";
import styles from "./input.module.scss";
import classnames from "classnames";

export interface InputProps {
	id: string;
	data: string;
	setData: (value: string) => void;
}

export function FormInput({ id, data, setData }: InputProps) {
	function handleData(e: any) {
		setData(e.target.value);
	}

	return (
		<input
			id={id}
			className={classnames(styles.form)}
			value={data}
			onChange={handleData}
		/>
	);
}
