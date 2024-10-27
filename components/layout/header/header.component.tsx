import { Profile } from "./profile";

import styles from "./header.module.scss";
import { Logo } from "./logo";

export const Header: React.FC = () => {
	return (
		<header {...{ className: styles.root }}>
			<Logo />
			<Profile />
		</header>
	);
};
