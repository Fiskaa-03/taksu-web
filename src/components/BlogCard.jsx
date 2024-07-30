/* eslint-disable react/prop-types */
import { GiSandsOfTime } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";

import {
	Link,
	Card,
	CardBody,
	CardHeader,
	Divider,
	CardFooter,
	Image,
} from "@nextui-org/react";

const BlogCard = ({ id, image, title, category, publishDate, visit }) => {
	return (
		<Card className="max-w-[400px] my-5">
			<CardHeader className="flex justify-center">
				<Image alt="festival" className="h-[250px] w-[400px]" src={image} />
			</CardHeader>
			<CardBody>
				<h1 className="font-bold">{title}</h1>
				<p className="text-sm">{category}</p>
				<div className="flex text-sm mt-4">
					<div className="flex items=center">
						<GiSandsOfTime size={20} color="black" />
						<p className="ml-1">{publishDate}</p>
					</div>
				</div>
				<div className="flex items=center mt-4">
					<IoEyeOutline size={24} />
					<h1 className="text-sm ml-1">{visit} orang telah melihat</h1>
				</div>
			</CardBody>
			<Divider />
			<CardFooter className="bg-primary">
				<Link className="text-white text-center w-full" href={`blog/${id}`}>
					Baca Selengkapnya
				</Link>
			</CardFooter>
		</Card>
	);
};

export default BlogCard;
