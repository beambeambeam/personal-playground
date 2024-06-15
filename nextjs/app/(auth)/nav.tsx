"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const AuthNav = () => {
	const pathname = usePathname();
	const paths: string[] = ["signin", "signout", "register"];

	return (
		<nav className="flex w-screen gap-4">
			{paths.map((path) => (
				<button key={path} type="button">
					<Link
						href={`/${path}`}
						className={`link ${pathname === `/${path}` ? "text-red-800" : "text-black"}`}
					>
						{path.charAt(0).toUpperCase() + path.slice(1)}
					</Link>
				</button>
			))}
		</nav>
	);
};
export default AuthNav;
