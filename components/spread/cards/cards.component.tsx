import { useSpread } from "@/hooks";
import { Modal, ScrollArea } from "@/components";

import styles from "./cards.module.scss";
import Image from "next/image";
import { useLocale } from "@/locale";

export const Cards: React.FC = () => {
	const { cards, explanation } = useSpread();
	const content = useLocale().cards;
	if (!cards) return <></>;
	if (!explanation) return <></>;

	return (
		<ScrollArea>
			<div {...{ className: styles.root }}>
				<div {...{ className: styles.cards }}>
					{Object.entries(cards).map(([card, description]) => {
						return (
							<Modal.Root>
								<Modal.Trigger>
									<img
										{...{
											className: styles.card,
											src: `/assets/cards/classic/${card}.jpg`,
											alt: card,
										}}
									/>
								</Modal.Trigger>

								<Modal.Content fitContent {...{ className: styles.cardModal }}>
									<Modal.Header>
										<Modal.Title>
											{content[card as keyof typeof content]}
										</Modal.Title>
									</Modal.Header>
									<img
										{...{
											className: styles.card,
											src: `/assets/cards/classic/${card}.jpg`,
											alt: card,
										}}
									/>

									<p {...{ className: styles.explanation }}>{description}</p>
								</Modal.Content>
							</Modal.Root>
						);
					})}
				</div>
				<p {...{ className: styles.explanation }}>{explanation}</p>
			</div>
		</ScrollArea>
	);
};
