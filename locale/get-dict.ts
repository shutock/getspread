import { dicts } from "@/locale";
import type { Locale } from "./locale.type";

export const getDict = (locale?: string) => {
	const locales = Object.keys(dicts);

	const hasLocale = locales.includes(locale || "");
	if (!hasLocale) return dicts;

	return dicts[locale as Locale];
};
