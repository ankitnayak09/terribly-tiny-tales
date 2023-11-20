import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Posts from "@/components/Posts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="">
				<Profile />
				<Posts />
			</main>
		</>
	);
}
