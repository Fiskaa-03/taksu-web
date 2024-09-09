import { useState, useEffect } from "react";
import classes from "./Home.module.css";
import { Image, Avatar, Link } from "@nextui-org/react";
import ScrollAnimation from "react-animate-on-scroll";
import SectionHeader from "../../components/SectionHeader";
import GeneralCard from "../../components/GeneralCard";
import BlogCard from "../../components/BlogCard";
import BlogData from "../blog/BlogData";

const Home = () => {
	const [blogs, setBlogs] = useState([]);

	const getBlogs = () => {
		setBlogs(BlogData);
	};
	useEffect(() => {
		getBlogs();
	});

	return (
		<div>
			<div className={classes.banner}>
				<div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
					<ScrollAnimation animateIn="fadeIn">
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
					</ScrollAnimation>
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
								Taksu menawarkan layanan kesenian Bali dengan tetap menjaga
								tradisi dan aturan yang ada, memastikan setiap pertunjukan
								disajikan dengan hormat dan autentik
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
							image="./assets/card/networking.png"
							title="Jaringan Terbaik"
							description="Memastikan setiap pertunjukan dari penari yang berpengalaman dan berbakat. "
							color="white"
						/>
						<div className="flex max-md:hidden">
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 mx-2 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
						</div>
						<GeneralCard
							image="./assets/card/personalization.png"
							title="Personalisasi Acara"
							description="Menawarkan layanan yang dapat disesuaikan dengan keinginan dan kebutuhan Anda"
							color="white"
						/>
						<div className="flex max-md:hidden">
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 mx-2 w-2 h-2 bg-white rounded-xl"></div>
							<div className="my-4 w-2 h-2 bg-white rounded-xl"></div>
						</div>
						<GeneralCard
							image="./assets/card/easy-access.png"
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
							image="./assets/card/choose.png"
							title="Pilih Layanan"
							description="Pilih beragam layanan yang ingin kamu pesan!"
							color="primary"
						/>
						<div className="flex max-md:hidden">
							<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
							<div className="my-4 mx-2 w-2 h-2 bg-primary rounded-xl"></div>
							<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
						</div>
						<GeneralCard
							image="./assets/card/discussion.png"
							title="Diskusi Acara"
							description="Diskusikan acara yang ingin kamu adakan bersama professional"
							color="primary"
						/>
						<div className="flex max-md:hidden">
							<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
							<div className="my-4 mx-2 w-2 h-2 bg-primary rounded-xl"></div>
							<div className="my-4 w-2 h-2 bg-primary rounded-xl"></div>
						</div>
						<GeneralCard
							image="./assets/card/enjoy.png"
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
						{blogs.map((blog) => {
							return (
								<BlogCard
									key={blog.id}
									id={blog.id}
									category={blog.category}
									image={blog.image}
									title={blog.title}
									publishDate={blog.publishDate}
									visit={blog.visit}
								/>
							);
						})}
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn">
				<div className="container w-500 mx-auto" id="blog">
					<SectionHeader title="Mitra Kami" description="" color="primary" />
					<div className="flex items-center justify-around flex-wrap mt-10">
						<Link href="#">
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								className="w-40 h-40 mx-10 my-5"
							/>
						</Link>
						<Link href="#">
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								className="w-40 h-40 mx-10 my-5"
							/>
						</Link>
						<Link href="#">
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								className="w-40 h-40 mx-10 my-5"
							/>
						</Link>
						<Link href="#">
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								className="w-40 h-40 mx-10 my-5"
							/>
						</Link>
						<Link href="#">
							<Avatar
								src="https://i.pravatar.cc/150?u=a04258114e29026708c"
								className="w-40 h-40 mx-10 my-5"
							/>
						</Link>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default Home;
