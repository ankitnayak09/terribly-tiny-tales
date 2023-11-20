import React from "react";
import { postsData } from "@/public/data";
import Post from "./Post";
export default function Posts() {
	return (
		<section>
			<div className="flex">
				<div className="px-3 py-1 font-bold text-sky-500 border border-slate-200 rounded-sm border-b-transparent">
					134&nbsp;Posts
				</div>
				<div className="border border-transparent border-b-slate-200 w-full"></div>
			</div>
			{postsData.map((post) => (
				<Post {...post} />
			))}
		</section>
	);
}
