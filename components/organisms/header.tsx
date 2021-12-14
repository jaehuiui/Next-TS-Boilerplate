import React from "react";
import styles from "./header.module.scss";
import classnames from "classnames";
import Link from "next/link";
import path from "@lib/utils/path";

export default function Header() {
	return (
		<header className={classnames(styles.wrapper)}>
			<p>Logo</p>
			<nav className={classnames(styles.navigation)}>
				<Link href={path.home}>Home</Link>
				<Link href={path.about}>About</Link>
			</nav>
		</header>
	);
}
