import React, { useState } from "react";
import styles from "./form.module.scss";
import classnames from "classnames";
import { FormLabel } from "@comp/atoms/label";
import { FormInput } from "@comp/atoms/input";

export default function Form() {
	const [name, setName] = useState<string>("");

	return (
		<form className={classnames(styles.wrapper)}>
			<FormLabel target={"name"} name={"User Name"} />
			<FormInput id="name" data={name} setData={setName} />
		</form>
	);
}
