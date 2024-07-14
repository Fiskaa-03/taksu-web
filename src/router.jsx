import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import BlogDetail from "./pages/blog/BlogDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "blog",
				children: [
					{
						path: ":id",
						element: <BlogDetail />,
					},
				],
			},
		],
	},
]);

export default router;
