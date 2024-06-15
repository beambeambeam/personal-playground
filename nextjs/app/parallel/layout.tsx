export default function Layout({
	children,
	terminal,
	workspace,
}: {
	children: React.ReactNode;
	workspace: React.ReactNode;
	terminal: React.ReactNode;
}) {
	return (
		<>
			{children}
			{terminal}
			{workspace}
		</>
	);
}
