import ScrollAnimation from "react-animate-on-scroll";
import { Image } from "@nextui-org/react";

import classes from "./AboutUs.module.css";

const AboutUs = () => {
	return (
		<div>
			<div className={classes.banner}>
				<div className="mx-auto max-w-6xl py-4 sm:py-36">
					<ScrollAnimation animateIn="fadeIn">
						<div className="container mx-auto" id="start">
							<div className="flex flex-col sm:flex-row justify-between items-center">
								<div className="flex flex-col w-1/3 items-center">
									<Image src="/assets/logo/Logo-Taksu-W_Name.png" width={200} />
									<p className="text-white text-2xl sm:text-5xl font-bold">
										Sejarah Taksu
									</p>
								</div>
								<div className="flex flex-col w-11/12 mt-2">
									<p className="text-sm sm:text-lg xl:text-2xl text-white text-left">
										Bali dikenal dengan kekayaan budaya dan seninya, di mana
										banyak penduduk lokal mengandalkan tradisi ini sebagai
										sumber mata pencaharian. Kesenian tidak hanya menjadi
										ekspresi keindahan jiwa, tetapi juga berperan penting dalam
										mendidik generasi muda melalui sanggar tari yang mengajarkan
										tari tradisional Bali.
									</p>
									<p className="text-sm sm:text-lg xl:text-2xl text-white text-left mt-4">
										Memperkenalkan Taksu, platform digital yang membantu sanggar
										dan seniman Bali memasarkan layanan mereka, menyediakan
										akses mudah untuk jasa pertunjukan kesenian. Fokus kami pada
										&quot;Permata Tersembunyi&quot; seni Bali mendukung
										perkembangan seni lokal dan pelestarian budaya.
									</p>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>

			<ScrollAnimation animateIn="slideInUp" className="text-primary">
				<div className="my-20 container w-500 mx-auto py-4" id="start">
					<div className="flex flex-col sm:flex-row justify-between items-center">
						<div className="flex flex-col w-11/12 mt-2">
							<h1 className="text-3xl font-bold text-left mb-4">Visi Kami</h1>
							<p className="text-lg sm:text-xl text-secondary text-left">
								Menjadi platform terdepan dalam mempromosikan kesenian Bali,
								dengan memastikan setiap pertunjukan disajikan dengan kehormatan
								dan keaslian, dengan melestarikan tradisi dan budaya yang ada.
								Kami berkomitmen untuk mendukung para seniman dan sanggar
								kesenian Bali, serta mempermudah akses bagi penikmat seni untuk
								menikmati pengalaman seni Bali yang autentik dan berkualitas.
							</p>
						</div>
						<div className="flex flex-col w-1/3 items-center">
							<Image src="/assets/about-us/target.png" width={200} />
						</div>
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation animateIn="slideInUp" className="text-primary">
				<div
					className="my-20 container w-500 mx-auto bg-primary py-12 px-4"
					id="start">
					<div className="flex flex-col sm:flex-row justify-between items-center">
						<div className="flex flex-col w-1/3 items-center">
							<Image src="/assets/about-us/growth.png" width={200} />
						</div>
						<div className="flex flex-col w-11/12 mt-2 text-white">
							<h1 className="text-3xl font-bold text-left mb-4">Misi Kami</h1>
							<ul className="list-disc text-left text-lg">
								<li className="my-2">
									Mengembangkan platform digital yang mudah digunakan untuk
									mempromosikan pertunjukan seni Bali serta menjangkau lebih
									banyak orang
								</li>
								<li className="my-2">
									Membangun jaringan antara seniman, sanggar, dan pemangku
									kepentingan untuk meningkatkan visibilitas dan peluang
									pertunjukan
								</li>
								<li className="my-2">
									Menyediakan pelatihan dan workshop untuk seniman dan pengelola
									sanggar tentang pemasaran digital dan manajemen bisnis
								</li>
								<li className="my-2">
									Menjaga dan melestarikan tradisi kesenian Bali dengan
									memastikan pertunjukan tetap autentik dan sesuai dengan nilai
									budaya
								</li>
							</ul>
						</div>
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation animateIn="slideInUp" className="text-primary">
				<div className="my-20 container w-500 mx-auto py-12 px-8" id="start">
					<div className="flex flex-col sm:flex-row justify-between items-center">
						<div className="flex flex-col w-11/12 mt-2 text-primary">
							<h1 className="text-3xl font-bold text-left mb-4">
								Keunggulan Kami
							</h1>
							<ul className="list-disc text-left text-lg text-secondary">
								<li className="my-2">
									Menyajikan pertunjukan seni Bali dengan tetap menjaga tradisi
									dan aturan yang ada, memastikan setiap pertunjukan disajikan
									dengan autentik dan penuh hormat
								</li>
								<li className="my-2">
									Memudahkan seniman dan sanggar dalam mempromosikan layanan
									mereka kepada audiens yang lebih luas melalui platform digital
									yang user-friendly.
								</li>
								<li className="my-2">
									Membangun koneksi antara seniman, sanggar, dan pemangku
									kepentingan untuk meningkatkan visibilitas dan peluang
									pertunjukan
								</li>
								<li className="my-2">
									Melakukan pemasaran yang efektif untuk menarik perhatian
									penikmat seni lokal dan internasional
								</li>
							</ul>
						</div>
						<div className="flex flex-col w-1/3 items-center">
							<Image src="/assets/about-us/diamond.png" width={200} />
						</div>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default AboutUs;
