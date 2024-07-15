import { Image, Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BlogBox = ({ image, title, link }) => {
	return (
		<Link to={link}>
			<div className="max-w-md">
				<div className="flex space-y-1 gap-2 items-center">
					<Image
						src={image}
						width={80}
						height={80}
						style={{ objectFit: "cover", width: "100%", height: "100%" }}
					/>
					<a className="text-small leading-snug text-default-600 text-left">
						{title}
					</a>
				</div>
				<Divider className="my-4" />
			</div>
		</Link>
	);
};

export default BlogBox;
