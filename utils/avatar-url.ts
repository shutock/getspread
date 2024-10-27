const base = "https://t.me";

export const avatarUrl = (username?: string) => {
	if (!username) return undefined;

	return new URL(`i/userpic/320/${username}.jpg`, base).toString();
};
