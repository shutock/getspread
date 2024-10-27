"use client";

import { useState } from "react";

import { Button, List, Modal, Userpic } from "@/components";
import { useTonAccount, useTonConnect, useUser } from "@/hooks";
import { useLocale } from "@/locale";
import { shortAddress } from "@/utils";

import { Disconnect } from "./disconnect";

import styles from "./profile.module.scss";

export const Profile: React.FC = () => {
	const { user } = useUser();
	const { connect, isConnected } = useTonConnect();
	const { address } = useTonAccount();
	const content = useLocale().profile;

	const state = useState(false);
	const disconnect = () => state[1](true);

	return (
		<>
			<Disconnect {...{ state }} />

			<Modal.Root>
				<Modal.Trigger {...{ className: styles.trigger }} asChild>
					<Button unstyled>
						<div {...{ className: styles.userpic }}>
							<Userpic {...{ className: styles.image, user }} />
							{isConnected && (
								<img
									{...{ className: styles.icon, src: "/assets/logos/ton.svg" }}
								/>
							)}
						</div>

						<div {...{ className: styles.about }}>
							<span {...{ className: styles.name }}>{user?.firstName}</span>
							<span {...{ className: styles.username }}>@{user?.username}</span>
						</div>
					</Button>
				</Modal.Trigger>

				<Modal.Content {...{ className: styles.content }}>
					<Modal.Header {...{ className: styles.header }}>
						<Userpic {...{ className: styles.userpic, user }} />

						<Modal.Title {...{ className: styles.title }}>
							{[user?.firstName, user?.lastName].join(" ")}
						</Modal.Title>

						<span {...{ className: styles.username }}>@{user?.username}</span>
					</Modal.Header>

					<Modal.Body {...{ className: styles.body }}>
						<List.Root {...{ className: styles.list }}>
							<List.Item
								{...{
									className: styles.item,
									onClick: isConnected ? disconnect : connect,
								}}
							>
								<List.Icon>
									<img
										{...{
											className: styles.icon,
											src: "/assets/logos/ton.svg",
										}}
									/>
								</List.Icon>

								<List.Container>
									<List.Content>
										<List.Title>{content.wallet.title}</List.Title>

										<List.Description>
											{shortAddress(address) || content.wallet.description}
										</List.Description>
									</List.Content>

									<div>
										{content.wallet[isConnected ? "disconnect" : "connect"]}
									</div>
								</List.Container>
							</List.Item>
						</List.Root>
					</Modal.Body>
				</Modal.Content>
			</Modal.Root>
		</>
	);
};
