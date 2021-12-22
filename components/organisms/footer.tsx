import React from "react";
import styles from "./footer.module.scss";
import classnames from "classnames";

export function Footer() {
	return (
		<footer className={classnames(styles.wrapper)}>
			<p>Company Info</p>
			<nav className={classnames(styles.footer__navigation)}>sitemap</nav>
		</footer>
	);
}
