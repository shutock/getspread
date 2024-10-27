"use client";

import {
	type MiniAppHeaderColor,
	useThemeParams,
	useMiniApp,
} from "@telegram-apps/sdk-react";
import { useEffect } from "react";

import { hexToHsl, hslToHex } from "@/utils";

import { fonts } from "./fonts";
import "./globals.scss";

export const Styles: React.FC = () => {
	const themeParams = useThemeParams();
	const miniApp = useMiniApp();

	useEffect(() => {
		const styles = getComputedStyle(document.documentElement);

		const h = Number(styles.getPropertyValue("--paper-h").replace("deg", ""));
		const s = Number(styles.getPropertyValue("--paper-s").replace("%", ""));
		const l = Number(styles.getPropertyValue("--paper-l").replace("%", ""));

		const hex = hslToHex({ h, s, l });

		try {
			miniApp?.setHeaderColor(hex as MiniAppHeaderColor);
		} catch (error) {
			console.error(error);
		}
	}, [miniApp]);

	const theme = hexToHsl(themeParams?.buttonColor || "#808080");

	return (
		<style jsx global>
			{`
        html {
          --default-font-family: ${fonts.rounded.style.fontFamily};
					--theme-h: ${theme.h};
					--theme-s: ${theme.s}%;
					--theme-l: ${theme.l}%;
          }
          `}
		</style>
	);
};

// --heading-font-family: ${fonts.rounded.style.fontFamily};
// --strong-font-family: ${fonts.rounded.style.fontFamily};
// --em-font-family: ${fonts.rounded.style.fontFamily};
// --quote-font-family: ${fonts.rounded.style.fontFamily};
