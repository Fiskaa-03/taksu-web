import { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import BlogData from "./BlogData";

const BlogList = () => {
	const [blogs, setBlogs] = useState([]);

	const getBlogs = () => {
		setBlogs(BlogData);
	};
	useEffect(() => {
		getBlogs();
	});

	return (
		<div className="my-20 container w-500 mx-auto">
			<div className="flex items-center justify-around flex-wrap">
				{blogs.map((blog) => {
					return (
						<BlogCard
							key={blog.id}
							id={blog.id}
							category={blog.category}
							image={blog.image}
							title={blog.title}
							publishDate={blog.publishDate}
							visit={blog.visit}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default BlogList;
