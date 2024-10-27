import { useInitDataRaw } from "@telegram-apps/sdk-react";

import type { Dict } from "./dict.type";
import { getDict } from "./get-dict";

export const useLocale = () => {
	const { result } = useInitDataRaw();
	return getDict(result?.user?.languageCode) as Dict;
};
