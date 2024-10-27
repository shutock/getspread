"use client";

import { useExpandApp } from "@/hooks";
import { Header } from "./header";

import styles from "./layout.module.scss";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	useExpandApp();

	return (
		<div {...{ className: styles.root }}>
			<Header />
			<main {...{ className: styles.main }}>{children}</main>
		</div>
	);
};
