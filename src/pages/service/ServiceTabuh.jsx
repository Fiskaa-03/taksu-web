import { Image } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import DataTabuh from "./DataTabuh";
import { Button, Link } from "@nextui-org/react";

const ServiceTabuh = () => {
	let { id } = useParams();
	id = parseInt(id) - 1; // To make it same with TarData indexing

	return (
		<div>
			<div className="bg-primary h-100 max-sm:h-screen">
				<div className="flex items-start w-4/5 mx-auto py-4 max-md:flex-col">
					<div className="flex justify-center items-start relative w-full">
						<Image src={DataTabuh[id].image} className="max-md:hidden" />
					</div>
					<div className="w-full mt-14 text-left text-white">
						<h1 className="font-bold text-3xl my-4">{DataTabuh[id].title}</h1>
						<p className="my-4">{DataTabuh[id].desc1}</p>
						<p className="my-4">{DataTabuh[id].desc2}</p>
						<Button
							variant="bordered"
							className="text-black bg-white"
							as={Link}
							target="blank"
							href="https://wa.me/082247179972">
							Pesan
						</Button>
					</div>
				</div>
			</div>
			<div className="bg-white w-full h-[150px] z-10 relative"></div>
		</div>
	);
};

export default ServiceTabuh;