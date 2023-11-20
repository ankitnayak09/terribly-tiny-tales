import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Posts from "@/components/Posts";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Profile Page</title>
			</Head>
			<Navbar />
			<main className="">
				<Profile />
				<Posts />
			</main>
		</>
	);
}
