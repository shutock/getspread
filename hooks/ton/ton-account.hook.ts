import { useTonAddress, useTonWallet } from "@tonconnect/ui-react";

export const useTonAccount = () => {
	const address = useTonAddress(true);
	const wallet = useTonWallet();

	return {
		account: wallet?.account,
		address,
	};
};
