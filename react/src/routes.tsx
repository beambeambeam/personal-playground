import {
	RouteObject,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "./error";
import Topic from "./topic/topic";
import ConditionalRendering from "./topic/conditional_render";
import ReactRouter from "./topic/react_router";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Topic />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/cond",
				element: <ConditionalRendering />,
			},
			{
				path: "/router",
				element: <ReactRouter />,
			},
		],
	},
];

const Routes = () => {
	const route = createBrowserRouter(routes);
	return <RouterProvider router={route} />;
};
export default Routes;

export { routes };
