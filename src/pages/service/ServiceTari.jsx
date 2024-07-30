import { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard";
import TariData from "./DataTari";
import ServiceData from "./DataService";

const ServiceTari = () => {
	let { id } = useParams();
	id = parseInt(id) - 1; // To make it same with TarData indexing

	const [services, setServices] = useState([]);
	const [category, setCategory] = useState([]);

	useEffect(() => {
		setCategory(TariData[id].category);
	}, [id]);

	useEffect(() => {
		// Filter services based on selected category
		try {
			if (category) {
				const filtered = ServiceData.filter(
					(item) => item.category === category
				);
				setServices(filtered);
			}
		} catch (error) {
			console.error(error);
		}
	}, [category]);

	return (
		<div>
			<div className="bg-primary h-100 max-sm:h-screen">
				<div className="flex items-start w-4/5 mx-auto py-4 max-md:flex-col">
					<div className="flex justify-center items-start relative w-full">
						<Image src={TariData[id].image} className="max-md:hidden" />
					</div>
					<div className="w-full mt-14 text-left text-white">
						<h1 className="font-bold text-3xl my-4">{TariData[id].title}</h1>
						<p className="my-4">{TariData[id].desc1}</p>
						<p className="my-4">{TariData[id].desc2}</p>
					</div>
				</div>
			</div>
			<div className="bg-white w-full h-full z-10 relative">
				<div className="container w-4/5 mx-auto">
					<div className="text-left text-primary pt-10">
						<h2 className="font-bold text-2xl">Layanan</h2>
						<div className="my-4 w-40 h-1 bg-primary rounded"></div>
					</div>
					<div className="flex items-center justify-around flex-wrap">
						{services.map((service) => (
							<ServiceCard
								key={service.id}
								id={service.id}
								image={service.image}
								title={service.title}
								desc={service.desc}
								category={service.category}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceTari;
