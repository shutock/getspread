"use client";

import { forwardRef } from "react";

import * as Scroll from "@radix-ui/react-scroll-area";

import styles from "./scroll-area.module.scss";
import { cn } from "@/utils";

type Props = React.ComponentProps<typeof Scroll.Viewport> &
	React.ComponentProps<typeof Scroll.Root> & { scrollBarClassName?: string };

export const ScrollArea = forwardRef<HTMLDivElement, Props>(
	(
		{
			children,
			className,
			type,
			scrollHideDelay,
			scrollBarClassName,
			...props
		},
		ref,
	) => (
		<Scroll.Root
			{...{ className: cn(styles.root, className), type, scrollHideDelay, ref }}
		>
			<Scroll.Viewport {...{ className: styles.viewport, props }}>
				{children}
			</Scroll.Viewport>
			<Scroll.Scrollbar
				{...{
					className: cn(styles.scrollbar, scrollBarClassName),
					orientation: "vertical",
				}}
			>
				<Scroll.Thumb {...{ className: styles.thumb }} />
			</Scroll.Scrollbar>
		</Scroll.Root>
	),
);

ScrollArea.displayName = "ScrollArea";
