import React, { useState } from "react";
import styles from "./form.module.scss";
import classnames from "classnames";
import { Label, Input } from "@comp";

export function Form() {
	const [name, setName] = useState<string>("");

	return (
		<form className={classnames(styles.wrapper)}>
			<Label target={"name"} name={"User Name"} />
			<Input id="name" data={name} setData={setName} />
		</form>
	);
}
