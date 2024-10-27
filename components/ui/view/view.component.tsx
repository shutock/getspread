"use client";

import { forwardRef } from "react";
import { Drawer } from "vaul";

import { cn } from "@/utils";

import styles from "./view.module.scss";
import { useLocale } from "@/locale";

export const { Close, Root, NestedRoot, Trigger } = Drawer;

type Props = React.ComponentPropsWithRef<typeof Drawer.Portal> &
	React.ComponentPropsWithRef<typeof Drawer.Content> & { back?: boolean };

export const Content: React.FC<Props> = ({
	container,
	forceMount,
	className,
	back = false,
	children,
	...props
}) => {
	const content = useLocale().misc;

	return (
		<Drawer.Portal {...{ container, forceMount }}>
			<Drawer.Overlay {...{ className: styles.overlay }} />
			<Drawer.Content
				{...{
					className: cn(styles.content, className),
					...props,
				}}
			>
				<Drawer.Close {...{ className: styles.close }}>
					{back && (
						<>
							<span>􀆉</span>
							<span>{content.back}</span>
						</>
					)}
					{!back && <span>{content.close}</span>}
				</Drawer.Close>
				{children}
			</Drawer.Content>
		</Drawer.Portal>
	);
};

export const Header = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
	({ className, children, ...props }, ref) => {
		return (
			<div {...{ className: cn(styles.header, className), ref, ...props }}>
				{children}
			</div>
		);
	},
);

Header.displayName = "Modal.Header";

export const Footer = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
	({ className, children, ...props }, ref) => {
		return (
			<div {...{ className: cn(styles.footer, className), ref, ...props }}>
				{children}
			</div>
		);
	},
);

Footer.displayName = "Modal.Footer";

export const Body = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
	({ className, children, ...props }, ref) => {
		return (
			<div {...{ className: cn(styles.body, className), ref, ...props }}>
				{children}
			</div>
		);
	},
);

Footer.displayName = "Modal.Body";

export const Title = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof Drawer.Title>
>(({ className, children, ...props }, ref) => {
	return (
		<Drawer.Title
			{...{ className: cn(styles.title, className), ref, ...props }}
		>
			{children}
		</Drawer.Title>
	);
});

Title.displayName = "Modal.Title";

export const Description = forwardRef<
	HTMLDivElement,
	React.ComponentProps<typeof Drawer.Description>
>(({ className, children, ...props }, ref) => {
	return (
		<Drawer.Description
			{...{ className: cn(styles.description, className), ref, ...props }}
		>
			{children}
		</Drawer.Description>
	);
});

Description.displayName = "Modal.Description";
