import { Button, View } from "@/components";
import { useLocale } from "@/locale";

import styles from "./spread.module.scss";
import { Loading } from "./loading";
import { useJettons, useSpread } from "@/hooks";
import { useCallback } from "react";
import { Cards } from "./cards";

export const Spread: React.FC = () => {
	const content = useLocale().spread;
	const { data } = useJettons();
	const { getSpread, isLoading } = useSpread();

	const onClick = useCallback(() => data && getSpread(data), []);

	return (
		<View.Root {...{ direction: "right" }}>
			<View.Trigger asChild>
				<Button {...{ onClick }}>{content.button.new}</Button>
			</View.Trigger>

			<View.Content {...{ className: styles.content }}>
				{isLoading && <Loading />}
				{!isLoading && <Cards />}
			</View.Content>
		</View.Root>
	);
};
