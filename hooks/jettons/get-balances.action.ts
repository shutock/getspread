"use server";

import { tonApi } from "@/lib";
import { address as toAddress } from "@ton/core";

export const getBalances = async (address: string) => {
	const { balances } = await tonApi.accounts.getAccountJettonsBalances(
		toAddress(address),
	);

	const tonBalance = (await tonApi.accounts.getAccount(toAddress(address)))
		.balance;

	return [
		{
			balance: Number(tonBalance) / 1e9,
			address: "ton",
			name: "TON",
			symbol: "TON",
			image: "/assets/logos/ton.svg",
			isVerified: true,
		},
		...balances
			.filter(({ balance }) => Number(balance) > 0.000000001)
			.map(({ balance, jetton }) => ({
				balance: Number(balance) / Number(`1e${jetton.decimals}`),
				address: jetton.address.toString(),
				name: jetton.name,
				symbol: jetton.symbol,
				image: jetton.image,
				isVerified: jetton.verification,
			})),
	];
};
