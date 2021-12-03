import React from "react";
import styles from "./input.module.scss";
import classnames from "classnames";

export interface InputProps {
	id: string;
	data: string;
	setData: (value: string) => void;
}

function FormInput({ id, data, setData }) {
	function handleData(e) {
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

export { FormInput };
