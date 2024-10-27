"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useLocale } from "@/locale";

import styles from "./loading.module.scss";

export const Loading: React.FC = () => {
	const [sec, setSec] = useState(0);
	const messageId = Math.floor(sec / 3);

	const content = useLocale().spread;

	useEffect(() => {
		const interval = setInterval(() => {
			setSec((prev) => prev + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div {...{ className: styles.root }}>
			<img
				{...{
					className: styles.image,
					src: "/assets/stickers/duck/scanning.gif",
				}}
			/>

			<h3 {...{ className: styles.title }}>
				{content.loading.messages.map((message, id) => {
					const isRendered = id === messageId % content.loading.messages.length;

					return (
						<AnimatePresence
							key={`${message}-${id}`}
							{...{ mode: "popLayout" }}
						>
							{isRendered && (
								<motion.span
									{...{
										className: styles.message,
										initial: { opacity: 0, filter: "blur(.5rem)", scaleX: 0.5 },
										animate: { opacity: 1, filter: "blur(0)", scaleX: 1 },
										exit: { opacity: 0, filter: "blur(.5rem)", scaleX: 0.5 },
									}}
								>
									{`${message}...`}
								</motion.span>
							)}
						</AnimatePresence>
					);
				})}
			</h3>

			<div>{content.loading.secsGone(sec)}</div>
		</div>
	);
};
