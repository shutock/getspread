import { useLocale } from "@/locale";

import styles from "./logo.module.scss";

export const Logo: React.FC = () => {
	const content = useLocale().app;

	return (
		<div {...{ className: styles.root }}>
			<img
				{...{ className: styles.logo, src: "/assets/logos/get-spread.svg" }}
			/>

			<div {...{ className: styles.content }}>
				<h3 {...{ className: styles.title }}>{content.title}</h3>
				<p {...{ className: styles.subtitle }}>{content.subtitle}</p>
			</div>
		</div>
	);
};
