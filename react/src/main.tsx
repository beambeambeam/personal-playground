import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
	RouteObject,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./error.tsx";
import ConditionalRendering from "./topic/conditional_render/index.tsx";
import Topic from "./topic/topic.tsx";
import ReactRouter from "./topic/react_router/index.tsx";
import FoodWrapper from "./topic/react_router/food.tsx";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/topic",
		element: <Topic />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/topic/cond", element: <ConditionalRendering /> },
			{
				path: "/topic/react_router",
				element: <ReactRouter />,
				children: [
					{
						path: "/topic/react_router/food/",
						element: <FoodWrapper />,
						children: [
							{
								path: "/topic/react_router/food/:foodId",
							},
						],
					},
				],
			},
		],
	},
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

export { routes };
