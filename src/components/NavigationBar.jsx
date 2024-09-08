"use client";

import React from "react";
import { useLocation } from "react-router-dom";
import Login from "../pages/auth/Login";
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
	const Location = useLocation();

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
					<Link
						href="/"
						className={
							Location.pathname === "/"
								? "text-primary font-bold"
								: "text-white"
						}>
						Beranda
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className={
							Location.pathname.startsWith("/about-us")
								? "text-primary font-bold"
								: "text-white"
						}
						href="/about-us">
						Tentang Kami
					</Link>
				</NavbarItem>

				<NavbarBrand>
					<a href="/" className="font-bold text-lg text-white">
						TAKSU
					</a>
				</NavbarBrand>

				<NavbarItem>
					<Link
						className={
							Location.pathname.startsWith("/blog")
								? "text-primary font-bold"
								: "text-white"
						}
						href="/blog">
						Blog
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className={
							Location.pathname.startsWith("/service")
								? "text-primary font-bold"
								: "text-white"
						}
						href="/service">
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
							<div className="py-2">
								<Login />
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
					<NavbarMenuItem key={`${item}-${index}`} className="mt-8">
						<Link
							color={"foreground"}
							className="w-full"
							href={
								index === 0
									? "/"
									: index === 1
									? "/"
									: index === 2
									? "/blog"
									: "/service"
							}
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
