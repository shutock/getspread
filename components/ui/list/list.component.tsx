import { createElement, forwardRef } from "react";

import { cn } from "@/utils";

import styles from "./list.module.scss";

export const Root = forwardRef<
	HTMLUListElement | HTMLOListElement,
	React.ComponentProps<"ul" | "ol"> & {
		isOrdered?: boolean;
	}
>(({ children, className, isOrdered = false, ...props }, ref) => {
	return createElement(isOrdered ? "ol" : "ul", {
		...props,
		ref,
		className: cn(styles.root, className),
		children,
	});
});

export const Item = forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
	({ className, children, ...props }, ref) => {
		return (
			<li {...{ className: cn(styles.item, className), ref, ...props }}>
				{children}
			</li>
		);
	},
);

export const Icon = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
	({ className, children, ...props }, ref) => {
		return (
			<div {...{ className: cn(styles.icon, className), ref, ...props }}>
				{children}
			</div>
		);
	},
);

export const Container = forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div">
>(({ className, children, ...props }, ref) => {
	return (
		<div {...{ className: cn(styles.container, className), ref, ...props }}>
			{children}
		</div>
	);
});

export const Content = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
	({ className, children, ...props }, ref) => {
		return (
			<div {...{ className: cn(styles.content, className), ref, ...props }}>
				{children}
			</div>
		);
	},
);

export const Title = forwardRef<HTMLHeadingElement, React.ComponentProps<"h5">>(
	({ className, children, ...props }, ref) => {
		return (
			<h5 {...{ className: cn(styles.title, className), ref, ...props }}>
				{children}
			</h5>
		);
	},
);

export const Description = forwardRef<
	HTMLParagraphElement,
	React.ComponentProps<"p">
>(({ className, children, ...props }, ref) => {
	return (
		<p {...{ className: cn(styles.description, className), ref, ...props }}>
			{children}
		</p>
	);
});
