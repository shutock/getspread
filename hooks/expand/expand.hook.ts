import { useViewport } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export const useExpandApp = () => {
	const vp = useViewport();

	useEffect(() => {
		try {
			vp?.expand();
		} catch (error) {
			console.error("Failed to expand app", error);
		}
	}, [vp?.expand]);
};
