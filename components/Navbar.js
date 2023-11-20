import Image from "next/image";
import React from "react";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center px-5 py-2 bg-[#111111FF]">
			<div className="flex gap-2 items-center logo uppercase text-[#E8E8E8FF] font-medium tracking-[.25rem]">
				<Image
					src="./logo.svg"
					alt=""
					className="w-[24px]"
					width="24"
					height="24"
				/>
				<div className="border border-transparent border-l-orangeYellow pl-2 text-xs">
					Stories
				</div>
			</div>
			<button className="bg-orangeYellow text-[#462000FF] font-bold p-1 px-2 rounded-md">
				Courses
			</button>
		</nav>
	);
}
