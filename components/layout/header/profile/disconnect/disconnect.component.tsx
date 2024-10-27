import { Button, Modal } from "@/components";
import { useLocale } from "@/locale";

import styles from "./disconnect.module.scss";
import { useTonConnect } from "@/hooks";

type Props = {
	state: [boolean, (open: boolean) => void];
};

export const Disconnect: React.FC<Props> = ({ state }) => {
	const { disconnect } = useTonConnect();
	const onOpenChange = state[1];
	const content = useLocale().profile.wallet.disconnectModal;
	const open = state[0];

	const onClick = () => {
		onOpenChange(false);
		disconnect();
	};

	return (
		<Modal.Root {...{ open, onOpenChange }}>
			<Modal.Content fitContent>
				<Modal.Header>
					<Modal.Title>{content.title}</Modal.Title>
					<Modal.Description>{content.description}</Modal.Description>
				</Modal.Header>
				<Modal.Footer>
					<Button {...{ className: styles.disconnect, onClick }}>
						{content.buttons.disconnect}
					</Button>
					<Button {...{ variant: "secondary" }}>
						{content.buttons.cancel}
					</Button>
				</Modal.Footer>
			</Modal.Content>
		</Modal.Root>
	);
};
