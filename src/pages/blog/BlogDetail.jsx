import { Image } from "@nextui-org/react";
import BlogBox from "../../components/BlogBox";

const BlogDetail = () => {
	return (
		<div className="container mx-auto mt-10">
			<div className="flex">
				<div className="flex flex-col items-center w-[75%] mr-10">
					<Image src={`/assets/blog/tari-kecak.png`} />
					<div className="text-black flex flex-col justify-between">
						<h1 className="font-bold text-3xl my-12">
							{"Tari Kecak menjadi salah satu seni terbaik di dunia"}
						</h1>
						<p className="text-justify">
							<b>Pengakuan Global</b>
							<p className="mt-4 mb-10">
								Tari Kecak, yang sering disebut sebagai Tarian Kera karena
								melibatkan sekelompok pria yang menirukan suara kera, telah
								memukau penonton di seluruh dunia dengan ritme dan koreografinya
								yang dinamis. Tari ini tidak hanya menjadi daya tarik utama bagi
								wisatawan yang berkunjung ke Bali, tetapi juga sering
								dipertunjukkan di berbagai panggung internasional.
							</p>

							<b>Sejarah dan Keunikan</b>
							<p className="mt-4 mb-10">
								Tari Kecak berasal dari ritual Sanghyang dan cerita epik
								Ramayana. Tarian ini menggambarkan kisah Rama dan Shinta, dengan
								latar belakang pemandangan matahari terbenam yang menakjubkan di
								Pura Uluwatu menjadi salah satu lokasi pertunjukan yang paling
								terkenal. Tidak seperti kebanyakan tarian Bali yang diiringi
								oleh gamelan, Tari Kecak menggunakan suara “cak” yang
								diteriakkan secara berirama oleh penari laki-laki sebagai
								pengiring.
							</p>

							<b>Apresiasi dari Komunitas Seni Internasional</b>
							<p className="mt-4 mb-10">
								Pengakuan sebagai salah satu seni terbaik di dunia ini adalah
								hasil dari dedikasi dan kerja keras para seniman Bali yang telah
								melestarikan dan mengembangkan Tari Kecak selama bertahun-tahun.
							</p>

							<b>Masa Depan Tari Kecak</b>
							<p className="mt-4 mb-10">
								Dengan pengakuan ini, Tari Kecak diharapkan akan semakin dikenal
								dan dihargai di seluruh dunia. Pemerintah Bali bersama dengan
								komunitas seni lokal berencana untuk terus mempromosikan dan
								melestarikan Tari Kecak, tidak hanya sebagai atraksi wisata,
								tetapi juga sebagai warisan budaya yang berharga.
							</p>
						</p>
					</div>
				</div>

				<div className="flex flex-col p-4">
					<BlogBox
						image={`/assets/blog/tari-kecak.png`}
						title={"Tari Kecak menjadi salah satu seni terbaik di dunia"}
						link={"/blog/1"}
					/>
				</div>
			</div>
		</div>
	);
};

export default BlogDetail;
