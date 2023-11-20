import React from "react";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center px-5 py-2 bg-[#111111FF]">
			<div className="flex gap-2 items-center logo uppercase text-[#E8E8E8FF] font-medium tracking-[.25rem]">
				<img src="./logo.svg" alt="" />
				<div className="border border-transparent border-l-[#FFC13EFF] pl-2">
					Stories
				</div>
			</div>
			<button className="bg-[#FFC13EFF] text-[#462000FF] font-bold p-2 rounded-md">
				Courses
			</button>
		</nav>
	);
}
