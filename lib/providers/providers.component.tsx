"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SDKProvider } from "@telegram-apps/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import { Loader } from "./loader";

const client = new QueryClient();

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<TonConnectUIProvider
			{...{ manifestUrl: "https://tinybattle.app/tonconnect-manifest.json" }}
		>
			<SDKProvider>
				<QueryClientProvider client={client}>
					<Loader>
						<>{children}</>
					</Loader>
				</QueryClientProvider>
			</SDKProvider>
		</TonConnectUIProvider>
	);
};
