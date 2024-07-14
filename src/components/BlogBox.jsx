import { Image, Divider } from "@nextui-org/react";

// eslint-disable-next-line react/prop-types
const BlogBox = ({ image, title, link }) => {
	return (
		<div className="max-w-md">
			<div className="flex space-y-1 gap-2 items-start justify-center">
				<Image src={image} className="w-20" />
				<a
					className="text-small leading-snug text-default-600 text-left"
					href={link}>
					{title}
				</a>
			</div>
			<Divider className="my-4" />
		</div>
	);
};

export default BlogBox;
