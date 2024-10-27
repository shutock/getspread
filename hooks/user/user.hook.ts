import { useInitDataRaw } from "@telegram-apps/sdk-react";
import { useMemo } from "react";

export const useUser = () => {
	const { result } = useInitDataRaw();
	const user = useMemo(() => result?.user, [result]);
	return { user };
};
