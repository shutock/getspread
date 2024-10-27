import { Layout } from "@/components";
import { Providers } from "@/lib";
import { Styles } from "@/styles";

const Root: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<html {...{ lang: "en", "data-theme": "system" }}>
			<body>
				<Providers>
					<Styles />
					<Layout>
						<>{children}</>
					</Layout>
				</Providers>
			</body>
		</html>
	);
};

export default Root;
