import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog post",
	description: "Blog post playground",
};

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div>
			<nav className="w-screen">this is header</nav>
			<div>{children}</div>
		</div>
	);
};
export default Layout;
