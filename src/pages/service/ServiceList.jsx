import { useState, useEffect } from "react";
import ServiceCard from "../../components/ServiceCard";
import { Select, SelectItem } from "@nextui-org/react";
import DataService from "./DataService";

const ServiceList = () => {
	const [services, setServices] = useState([]);
	const [category, setCategory] = useState("tari");

	useEffect(() => {
		// Filter services based on selected category
		try {
			if (category) {
				const filtered = DataService.filter(
					(item) => item.category === category
				);
				setServices(filtered);
			}
		} catch (error) {
			console.error(error);
		}
	}, [category]);

	return (
		<div className="my-20 container w-500 mx-auto">
			<div className="flex items-center mb-10">
				<p className="mr-4 font-bold">Category : </p>
				<Select
					label="Pilih Kategori Seni"
					size={"sm"}
					defaultSelectedKeys={["tari"]}
					variant="bordered"
					onChange={(e) => setCategory(e.target.value)}
					className="max-w-xs">
					<SelectItem key={"tari"}>Seni Tari</SelectItem>
					<SelectItem key={"tabuh"}>Seni Tabuh</SelectItem>
					<SelectItem key={"pertunjukan"}>Seni Pertunjukan</SelectItem>
				</Select>
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
	);
};

export default ServiceList;
