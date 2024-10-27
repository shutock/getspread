import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { useCallback, useMemo, useState } from "react";

export const useTonConnect = () => {
	const [tcUi] = useTonConnectUI();
	const wallet = useTonWallet();
	const isConnected = !!wallet;

	const disconnect = useCallback(() => tcUi.disconnect(), [tcUi]);
	const connect = useCallback(() => tcUi.openModal(), [tcUi]);

	return { disconnect, connect, isConnected };
};
