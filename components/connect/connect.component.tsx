"use client";

import Image from "next/image";

import { useLocale } from "@/locale";
import { Button } from "@/components";

import src from "@/public/assets/stickers/duck/face-control.gif";

import styles from "./connect.module.scss";
import { useTonConnect } from "@/hooks";

export const Connect: React.FC = () => {
	const { connect } = useTonConnect();
	const content = useLocale().connect;

	return (
		<div {...{ className: styles.root }}>
			<Image
				{...{
					className: styles.image,
					src,
					alt: "Sticker",
				}}
				unoptimized
			/>

			<div {...{ className: styles.content }}>
				<h1 {...{ className: styles.title }}>{content.title}</h1>
				<p {...{ className: styles.description }}>{content.description}</p>
			</div>

			<Button {...{ onClick: connect }}>{content.button}</Button>
		</div>
	);
};
