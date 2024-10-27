import { useCallback, useState } from "react";

export const useClipboard = (data?: string) => {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = useCallback(async (textToCopy: string) => {
		try {
			await navigator.clipboard.writeText(textToCopy);
			setIsCopied(true);
		} catch (error) {
			console.error("Error copying text to clipboard:", error);
			fallbackCopyToClipboard(textToCopy);
		}
	}, []);

	const fallbackCopyToClipboard = (textToCopy: string) => {
		const textField = document.createElement("textarea");
		textField.innerText = textToCopy;
		document.body.appendChild(textField);
		textField.select();
		textField.setSelectionRange(0, 99999);
		document.execCommand("copy");
		document.body.removeChild(textField);
		setIsCopied(true);
	};

	const handleClick = useCallback(
		(newData?: string) => {
			const textToCopy = newData || data;
			if (!textToCopy) return;

			copyToClipboard(textToCopy);
			setTimeout(() => {
				setIsCopied(false);
			}, 1500);
		},
		[data, copyToClipboard],
	);

	return { handleClick, isCopied };
};
