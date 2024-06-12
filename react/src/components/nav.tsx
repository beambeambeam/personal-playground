import { NavLink, RouteObject } from "react-router-dom";
import { routes } from "../routes";

const assignIdsToRoutes = (routes: RouteObject[]) => routes.map(assignId);

const assignId = (route: RouteObject) => ({
	...route,
	id: crypto.randomUUID(),
	children: route.children?.map(assignId),
});

const Nav = () => {
	const routeList = assignIdsToRoutes(routes);

	const RouteComponent = ({ route }: { route: RouteObject }) => {
		if (!route.path) {
			return;
		}

		return (
			<div key={route.id} className="text-blue-700 flex flex-col">
				<NavLink
					to={route.path}
					className={({ isActive }) =>
						[isActive ? "active" : "text-black"].join("flex flex-col")
					}
				>
					{route.path}
				</NavLink>
				{route.children && (
					<div className="flex flex-col">
						{route.children.map((childRoute: RouteObject) => (
							<RouteComponent key={childRoute.id} route={childRoute} />
						))}
					</div>
				)}
			</div>
		);
	};

	const RouteList = ({ route }: { route: typeof routeList }) => {
		console.log(route);
		return (
			<div>
				{route.map((item) => (
					<div key={item.id}>
						<RouteComponent route={item} />
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="w-full flex flex-col">
			<RouteList route={routeList} />
		</div>
	);
};

export default Nav;
