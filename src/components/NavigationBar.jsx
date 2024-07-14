"use client";

import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	Button,
} from "@nextui-org/react";
import { IoPerson } from "react-icons/io5";

const NavigationBar = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const menuItems = ["Beranda", "Tentang kami", "Blog", "Cari Layanan"];

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			className="bg-black py-2"
			shouldHideOnScroll>
			<NavbarContent className="sm:flex" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="lg:hidden text-white"
				/>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-20 -ml-16" justify="center">
				<NavbarItem isActive>
					<Link href="/">Beranda</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="text-white" href="/#about-us">
						Tentang Kami
					</Link>
				</NavbarItem>

				<NavbarBrand>
					<a href="#" className="font-bold text-lg text-white">
						{/* <Image src="/assets/artick.png" alt="Logo" /> */}
						TAKSU
					</a>
				</NavbarBrand>

				<NavbarItem>
					<Link className="text-white" href="/#blog">
						Blog
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className="text-white" href="/#">
						Cari Layanan
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem>
					<Popover placement="bottom-end">
						<PopoverTrigger>
							<Button className="text-white bg-transparent">
								<IoPerson />
							</Button>
						</PopoverTrigger>
						<PopoverContent>
							<div className="px-1 py-2">
								<div className="mb-4">
									<a href="#" className="text-small font-bold">
										Masuk
									</a>
								</div>
								<div>
									<a href="#" className="text-small">
										Daftar
									</a>
								</div>
							</div>
						</PopoverContent>
					</Popover>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={index === 2 ? "primary" : "foreground"}
							className="w-full"
							href="#"
							size="lg">
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default NavigationBar;
