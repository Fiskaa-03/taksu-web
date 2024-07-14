import classes from "./Home.module.css";
import { Image } from "@nextui-org/react";
import ScrollAnimation from "react-animate-on-scroll";
import SectionHeader from "../../components/SectionHeader";
import GeneralCard from "../../components/GeneralCard";
import BlogCard from "../../components/BlogCard";

const Home = () => {
	const publishDate = new Date("2024-07-02 14:12:10");
	return (
		<div>
			<div className={classes.banner}>
				<div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-5xl font-bold tracking-tight text-white">
							Jelajahi keindahan dan kekayaan budaya Bali melalui karya seni
							yang menakjubkan
						</h1>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#start"
								className="rounded-2xl bg-white px-12 py-2.5 text-sm font-semibold text-primary shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Mulai Berkunjung
							</a>
						</div>
					</div>
				</div>
			</div>

			<ScrollAnimation animateIn="slideInUp" className="text-primary">
				<div className="my-20 container w-500 mx-auto" id="start">
					<div className="flex justify-between items-center">
						<Image src="/assets/pura.png" width={200} />
						<div className="flex flex-col">
							<h3 className="text-3xl text-primary font-bold">
								Selamat Datang di Taksu
							</h3>
							<p className="text-xl text-primary mt-6 mb-4">
								Platform utama untuk merayakan momen berharga dengan sentuhan
								seni Bali yang autentik.
							</p>
							<div className={`my-4 w-40 h-1 mx-auto bg-primary rounded`}></div>
						</div>
						<Image src="/assets/pura.png" width={200} />
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn">
				<div
					className="container my-20 w-500 mx-auto bg-primary rounded-md py-8"
					id="about-us">
					<SectionHeader
						title="Kenapa Taksu?"
						description="Kami unggul melayani anda sebagai partner kerja kami "
						color="white"
					/>
					<div className="flex items-center justify-around flex-wrap">
						<GeneralCard
							image="./assets/card/search.png"
							title="Jaringan Sanggar Terbaik"
							description="Memastikan setiap pertunjukan dari penari yang berpengalaman dan berbakat. "
							color="white"
						/>
						<div className="flex">
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 mx-2 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
						</div>
						<GeneralCard
							image="./assets/card/search.png"
							title="Personalisasi Acara"
							description="Menawarkan layanan yang dapat disesuaikan dengan keinginan dan kebutuhan Anda"
							color="white"
						/>
						<div className="flex">
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 mx-2 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
						</div>
						<GeneralCard
							image="./assets/card/search.png"
							title="Kemudahan Akses"
							description="Memudahkan anda dalam mengakses informasi dan menghubungi kami"
							color="white"
						/>
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn">
				<div className="my-20 container w-500 mx-auto">
					<SectionHeader
						title="Cara Kerja"
						description="Bagaimana cara kerja pemesanan di taksu?"
						color="primary"
					/>
					<div className="flex items-center justify-around flex-wrap">
						<GeneralCard
							image="./assets/card/cashless.png"
							title="Pilih Layanan"
							description="Pilih beragam layanan yang ingin kamu pesan!"
							color="primary"
						/>
						<div className="flex">
							<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
							<div className="my-4 mx-2 w-2 h-2 bg-primary rounded-xl"></div>
							<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
						</div>
						<GeneralCard
							image="./assets/card/cashless.png"
							title="Diskusi Acara"
							description="Diskusikan acara yang ingin kamu adakan bersama professional"
							color="primary"
						/>
						<div className="flex">
							<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
							<div className="my-4 mx-2 w-2 h-2 bg-primary rounded-xl"></div>
							<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
						</div>
						<GeneralCard
							image="./assets/card/cashless.png"
							title="Nikmati Pertunjukan"
							description="Kami akan mempersiapkan layanan dan anda tinggal menyaksikannya"
							color="primary"
						/>
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation animateIn="slideInUp">
				<div className="my-20 container w-500 mx-auto" id="blog">
					<SectionHeader title="Blog Terbaru" description="" color="primary" />
					<div className="flex items-center justify-around flex-wrap">
						<BlogCard
							id={1}
							category={"Berita Terkini"}
							image={"./assets/blog/tari-kecak.png"}
							name={"Tari Kecak menjadi salah satu seni terbaik di dunia"}
							publishDate={publishDate}
							visit={5122}
						/>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default Home;
