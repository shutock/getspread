import { useIsMounted } from "@/hooks";

export const Loader: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { isMounted } = useIsMounted();
	if (!isMounted) return <></>;

	return <>{children}</>;
};
