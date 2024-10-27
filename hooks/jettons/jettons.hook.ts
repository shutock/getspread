import { useQuery } from "@tanstack/react-query";

import { useTonAccount } from "@/hooks";

import { getBalances } from "./get-balances.action";

export const useJettons = () => {
	const { address } = useTonAccount();

	return useQuery({
		queryKey: ["balance", address],

		queryFn: async () => {
			if (!address) throw new Error("No address provided");
			const balances = await getBalances(address);
			return balances;
		},
	});
};
