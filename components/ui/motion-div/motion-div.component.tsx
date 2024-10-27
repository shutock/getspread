import { motion } from "framer-motion";

import styles from "./motion-div.module.scss";

export const MotionDiv: React.FC<React.ComponentProps<typeof motion.div>> = ({
	children,
	...props
}) => {
	return (
		<motion.div
			{...{
				initial: { opacity: 0, y: "1rem", scale: 0.75 },
				animate: { opacity: 1, y: 0, scale: 1 },
				exit: { opacity: 0, y: "1rem", scale: 0.75 },
				className: styles.root,
				...props,
			}}
		>
			{children}
		</motion.div>
	);
};
