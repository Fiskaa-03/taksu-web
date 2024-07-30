import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import BlogDetail from "./pages/blog/BlogDetail";
import ServiceList from "./pages/service/ServiceList";
import BlogList from "./pages/blog/BlogList";
import ServiceTari from "./pages/service/ServiceTari";
import ServiceTabuh from "./pages/service/ServiceTabuh";
import ServicePertunjukan from "./pages/service/ServicePertunjukan";

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
				path: "service",
				children: [
					{
						index: true,
						element: <ServiceList />,
					},
					{
						path: "tari",
						children: [
							{
								path: ":id",
								element: <ServiceTari />,
							},
						],
					},
					{
						path: "tabuh",
						children: [
							{
								path: ":id",
								element: <ServiceTabuh />,
							},
						],
					},
					{
						path: "pertunjukan",
						children: [
							{
								path: ":id",
								element: <ServicePertunjukan />,
							},
						],
					},
				],
			},
			{
				path: "blog",
				children: [
					{
						index: true,
						element: <BlogList />,
					},
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
