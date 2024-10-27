"use client";

import { Connect, Jettons, MotionDiv } from "@/components";
import { useTonConnect } from "@/hooks";
import { AnimatePresence } from "framer-motion";

const Page: React.FC = () => {
	const { isConnected } = useTonConnect();

	return (
		<>
			<AnimatePresence>
				{!isConnected && (
					<MotionDiv>
						<Connect />
					</MotionDiv>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{isConnected && (
					<MotionDiv>
						<Jettons />
					</MotionDiv>
				)}
			</AnimatePresence>
		</>
	);
};

export default Page;
