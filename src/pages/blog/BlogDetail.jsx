import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Image, link } from "@nextui-org/react";
import BlogBox from "../../components/BlogBox";
import Data from "../../Data";

const BlogDetail = () => {
	const { id } = useParams();
	const [blogs, setBlogs] = useState([]);
	const [image, setImage] = useState();
	const [title, setTitle] = useState();
	const [headline1, setHeadline1] = useState();
	const [desc1, setDesc1] = useState();
	const [headline2, setHeadline2] = useState();
	const [desc2, setDesc2] = useState();
	const [headline3, setHeadline3] = useState();
	const [desc3, setDesc3] = useState();

	const getBlogs = () => {
		setBlogs(Data);
	};

	const getBlogByID = (id) => {
		const blog = Data.find((item) => item.id === Number(id));
		setImage(blog.image);
		setTitle(blog.title);
		setHeadline1(blog.headline1);
		setDesc1(blog.desc1);
		setHeadline2(blog.headline2);
		setDesc2(blog.desc2);
		setHeadline3(blog.headline3);
		setDesc3(blog.desc3);
	};

	useEffect(() => {
		getBlogByID(id);
		getBlogs();
	});

	return (
		<div className="container mx-auto mt-10">
			<div className="flex flex-row max-md:flex-col lg:flex-row">
				<div className="flex flex-col items-center w-[75%] mx-auto">
					<Image src={image} />
					<div className="text-black flex flex-col justify-between">
						<h1 className="font-bold text-3xl my-12">{title}</h1>
						<p className="text-justify">
							<b>{headline1}</b>
							<p className="mt-4 mb-10">{desc1}</p>

							<b>{headline2}</b>
							<p className="mt-4 mb-10">{desc2}</p>

							<b>{headline3}</b>
							<p className="mt-4 mb-10">{desc3}</p>
						</p>
					</div>
				</div>

				<div className="flex flex-col p-4">
					{blogs.map((blog) => {
						console.log(blog);
						return (
							<BlogBox
								key={blog.id}
								image={blog.image}
								title={blog.title}
								link={blog.link}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default BlogDetail;
