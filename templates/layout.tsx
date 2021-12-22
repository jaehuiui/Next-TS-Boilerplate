import React from "react";
import styles from "./layout.module.scss";
import classnames from "classnames";
import { Header, Footer } from "@comp";

export interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<main className={classnames(styles.wrapper)}>
			<Header />
			{children}
			<Footer />
		</main>
	);
}
