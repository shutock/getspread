"use client";

import { useJettons } from "@/hooks";
import { Icon, List, ScrollArea } from "@/components";

import styles from "./jettons.module.scss";
import { cn } from "@/utils";
import { Spread } from "../spread";

export const Jettons: React.FC = () => {
	const { data } = useJettons();
	if (!data) return <></>;

	if (!data)
		return (
			<div {...{ className: cn(styles.root, styles.skeleton) }}>
				<List.Root {...{ className: styles.list }}>
					{[...Array(8)].map((_, index) => (
						<List.Item key={index} {...{ className: styles.address }}>
							<List.Icon {...{ className: styles.icon }}></List.Icon>
							<List.Container>
								<List.Content>
									<List.Title {...{ className: styles.title }} />
									<List.Description {...{ className: styles.description }} />
								</List.Content>
							</List.Container>
						</List.Item>
					))}
				</List.Root>
			</div>
		);

	return (
		<ScrollArea
			{...{ className: styles.root, scrollBarClassName: styles.scrollBar }}
		>
			<List.Root {...{ className: styles.list }}>
				{data.map(({ address, balance, image, isVerified, name, symbol }) => (
					<List.Item key={address} {...{ className: styles.address }}>
						<List.Icon {...{ className: styles.icon }}>
							<img {...{ className: styles.image, src: image }} />
						</List.Icon>
						<List.Container>
							<List.Content>
								<List.Title {...{ className: styles.title }}>
									{name}
									{isVerified && (
										<>
											{" "}
											<Icon.CheckmarkSealFill
												{...{ className: styles.verified }}
											/>
										</>
									)}
								</List.Title>
								<List.Description>{`${Number(balance).toLocaleString("en-US", {
									maximumFractionDigits: 2,
									minimumFractionDigits: 2,
								})} $${symbol}`}</List.Description>
							</List.Content>
						</List.Container>
					</List.Item>
				))}
			</List.Root>

			<div {...{ className: styles.footer }}>
				<Spread />
			</div>
		</ScrollArea>
	);
};
