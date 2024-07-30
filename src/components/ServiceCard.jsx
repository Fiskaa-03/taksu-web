import {
	Link,
	Card,
	CardBody,
	CardHeader,
	Divider,
	CardFooter,
	Image,
} from "@nextui-org/react";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ id, image, title, desc, category }) => {
	return (
		<Card className="max-w-[400px] my-5" key={id}>
			<CardHeader className="flex justify-center">
				<Image alt="festival" className="h-[240px] w-[400px]" src={image} />
			</CardHeader>
			<CardBody>
				<h1 className="font-bold mb-3 mx-4 text-xl">{title}</h1>
				<p className="text-sm font-light mx-4">{desc}</p>
			</CardBody>
			<Divider />
			<CardFooter className="bg-primary">
				<Link
					className="text-white text-center w-full mx-4"
					target={
						category == "wali" || category == "bebali" || category == "balihan"
							? "blank"
							: ""
					}
					href={
						category == "wali" || category == "bebali" || category == "balihan"
							? "https://wa.me/082247179972"
							: category == "tari"
							? `/service/tari/${id}`
							: category == "tabuh"
							? `/service/tabuh/${id}`
							: `/service/pertunjukan/${id}`
					}>
					{category == "wali" || category == "bebali" || category == "balihan"
						? "Pesan Sekarang"
						: `Selanjutnya`}
				</Link>
			</CardFooter>
		</Card>
	);
};

export default ServiceCard;
