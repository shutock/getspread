"use client";

import { forwardRef, useEffect, useRef } from "react";
import type { User } from "@telegram-apps/sdk-react";

import { cn, mergeRefs } from "@/utils";

import styles from "./userpic.module.scss";

type Props = React.ComponentProps<"div"> & { user?: User };

export const Userpic = forwardRef<HTMLDivElement, Props>(
	({ user, className, style, ...props }, ref) => {
		const letters = user?.firstName.slice(0, 2).toUpperCase();

		const hue = Number(user?.id) % 360;

		const newRef = useRef<HTMLDivElement>(null);

		useEffect(() => {
			const container = newRef?.current;
			if (!container) return;

			const letters = container.querySelector(
				`.${styles.letters}`,
			) as HTMLElement;

			// const listener = () => {
			const { width, height } = container.getBoundingClientRect();
			const size = Math.min(width, height);

			letters.style.fontSize = `${size / 2 / 16}rem`;
			// };

			// listener();

			// window.addEventListener("resize", listener);

			// return () => {
			// 	window.removeEventListener("resize", listener);
			// };
		}, []);

		return (
			<div
				{...{
					className: cn(styles.root, className),
					ref: mergeRefs(ref, newRef),
					style: {
						"--hue": `${hue}deg`,
						...style,
					} as React.CSSProperties,
					...props,
				}}
			>
				<div {...{ className: styles.letters }}>{letters}</div>
				<img
					{...{
						className: styles.img,
						src: `https://t.me/i/userpic/320/${user?.username}.jpg`,
					}}
				/>
			</div>
		);
	},
);

Userpic.displayName = "Userpic";
