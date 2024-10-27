import type { MutableRefObject, RefCallback } from "react";

type Ref<T> =
	| ((instance: T | null) => void)
	| MutableRefObject<T | null>
	| null;

export const mergeRefs = <T>(...refs: Ref<T>[]): RefCallback<T> => {
	return (node: T | null) => {
		for (const ref of refs) {
			if (typeof ref === "function") {
				ref(node);
			} else if (ref != null) {
				(ref as MutableRefObject<T | null>).current = node;
			}
		}
	};
};
