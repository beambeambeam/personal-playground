import { NavLink, Outlet } from "react-router-dom";
import { routes } from "../main";

const Topic = () => {
	const topic_path = routes.filter((w) => w.path === "/topic")[0];
	return (
		<div>
			Topic
			<nav>
				{topic_path.children?.map((item) => (
					<div key={item.path}>
						{
							<NavLink to={item.path.toString()}>
								<ul>{item.path}</ul>
								{item.children && (
									<NavLink to={item.path.toString()}>
										{item.children.map((item) => (
											<div key={item.path}>
												{" "}
												{">"} {item.path}
											</div>
										))}
									</NavLink>
								)}
							</NavLink>
						}
					</div>
				))}
			</nav>
			<Outlet />
		</div>
	);
};
export default Topic;
