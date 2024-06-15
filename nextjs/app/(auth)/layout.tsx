import Link from "next/link";
import AuthNav from "./nav";

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div>
			<AuthNav />
			<div>{children}</div>
		</div>
	);
};
export default Layout;
