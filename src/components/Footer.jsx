import { Image } from "@nextui-org/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
	return (
		<div className="bg-primary w-full">
			<div className="mt-20 container w-500 mx-auto py-10 flex lg:flex-row max-md:flex-col justify-between lg:items-start max-md:items-center">
				<div className="flex flex-col w-44 text-center items-center">
					<Image
						src="/assets/logo/Logo-Taksu-Transparent.png"
						alt="Logo"
						className="h-48"
					/>
					<span className="text-white">Pesan layanan cepat dan anti ribet</span>
				</div>
				<div className="flex flex-col justify-between items-start h-full text-white">
					<h3 className="mb-6">Platform Kami</h3>
					<a className="my-2" href="/#about-us">
						Tentang Kami
					</a>
					<a className="my-2" href="/event">
						Cari Layanan
					</a>
					<a className="my-2" href="/#blog">
						Blog
					</a>
				</div>
				<div className="flex flex-col justify-between h-full text-white">
					<h3 className="mb-6">Kontak Kami</h3>
					<div className="flex items-center">
						<BsTelephone className="mr-2 text-xl" />
						<a className="my-2" href="https://wa.me/082247179972">
							+62 822-4717-9972
						</a>
					</div>
					<div className="flex items-center">
						<MdOutlineEmail className="mr-2 text-xl" />
						<a className="my-2" href="mailto:startup.taksu@gmail.com">
							startup.taksu@gmail.com
						</a>
					</div>
				</div>
				<div className="flex flex-col justify-between h-full text-white">
					<h3 className="mb-6">Media Sosial</h3>
					<a className="my-2" href="https://www.instagram.com/taksu_id/">
						<FaInstagram className="text-4xl" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
