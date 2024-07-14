/* eslint-disable react/prop-types */
import { MdOutlineDateRange, MdAccessTime } from "react-icons/md";
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

const BlogCard = ({ id, image, name, category, publishDate, visit }) => {
	const month = publishDate.toLocaleString("default", {
		month: "short",
	});
	const minutes = publishDate.getUTCMinutes().toString().padStart(2, "0");
	const date = `${publishDate.getUTCDate()} / ${month} / ${publishDate.getUTCFullYear()}`;
	const time = `${publishDate.getUTCHours()}:${minutes}`;

	return (
		<Card className="max-w-[400px] my-5">
			<CardHeader>
				<Image alt="festival" className="object-cover w-full" src={image} />
			</CardHeader>
			<CardBody>
				<h1 className="font-bold">{name}</h1>
				<p className="text-sm">{category}</p>
				<div className="flex text-sm mt-4">
					{category !== "FILM" ? (
						<>
							<div className="flex mr-5 items-center">
								<MdOutlineDateRange size={20} color="black" />
								<p className="ml-1">{date}</p>
							</div>
							<div className="flex items=center">
								<MdAccessTime size={20} color="black" />
								<p className="ml-1">{time}</p>
							</div>
						</>
					) : (
						<>
							<div className="flex items=center">
								<GiSandsOfTime size={20} color="black" />
								<p className="ml-1">{time}</p>
							</div>
						</>
					)}
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
