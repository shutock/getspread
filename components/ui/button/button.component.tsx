"use client";

import { forwardRef, useCallback } from "react";
import {
	type ImpactHapticFeedbackStyle,
	useHapticFeedbackRaw,
} from "@telegram-apps/sdk-react";

import { cn } from "@/utils";

import styles from "./button.module.scss";

const variants = {
	primary: styles.primary,
	secondary: styles.secondary,
} as const;

type Props = React.ComponentPropsWithoutRef<"button"> & {
	onClickDisabled?: React.ComponentPropsWithoutRef<"button">["onClick"];
	big?: boolean;
	unstyled?: boolean;
	haptic?: ImpactHapticFeedbackStyle;
	variant?: keyof typeof variants;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
	(
		{
			type = "button",
			children,
			onClick: callback,
			onClickDisabled,
			className,
			disabled,

			unstyled = false,

			big = false,
			haptic = "medium",
			variant = "primary",

			...props
		},
		ref,
	) => {
		const { result: h } = useHapticFeedbackRaw();

		const onClick = useCallback(
			(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
				try {
					haptic &&
						(disabled
							? h?.notificationOccurred("error")
							: h?.impactOccurred(haptic));
				} catch (error) {
					console.error(error);
				}

				if (!disabled) return callback?.(event);

				const button = event.currentTarget;

				button.classList.add(styles.disabled);
				onClickDisabled?.(event);

				setTimeout(() => button.classList.remove(styles.disabled), 400);
			},
			[callback, haptic, h, disabled, onClickDisabled],
		);

		return (
			<button
				{...{
					className: unstyled
						? className
						: cn(styles.root, big && styles.big, variants[variant], className),
					type,
					ref,
					onClick,
					...props,
				}}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";
