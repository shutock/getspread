export const encodeStartParam = (data: object) => {
	return window.btoa(JSON.stringify(data));
};

export const decodeStartParam = <T>(data?: string) => {
	if (!data) return null;
	let result: T | null = null;

	try {
		result = JSON.parse(window.atob(data)) as T;
	} catch (error) {
		console.error("Error decoding start param:", error);
	}

	return result;
};
