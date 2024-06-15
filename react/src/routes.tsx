import {
	RouteObject,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";

import ErrorPage from "./error";
import Topic from "./topic/topic";
import ConditionalRendering from "./topic/conditional_render";
import ReactRouter from "./topic/react_router";
import Context from "./topic/context";
import ZustandWrapper from "./topic/zustand";

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
			{
				path: "/context",
				element: <Context />,
			},
			{
				path: "/zustand",
				element: <ZustandWrapper />,
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
