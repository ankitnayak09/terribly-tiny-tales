import Likes from "@/public/icons/Likes";
import Loved from "@/public/icons/Loved";
import Stars from "@/public/icons/Stars";
import Views from "@/public/icons/Views";
import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";

export default function StatsCard({ statsFor, statsValue }) {
	if (statsFor === "followers" || statsFor === "following") {
		return (
			<p className="text-gray text-center mt-2 capitalize">
				<span className="block border-2 border-gray rounded-md text-center text-base font-bold opacity-80 px-4">
					{statsValue}
				</span>
				{statsFor}
			</p>
		);
	} else {
		return (
			<>
				<div className="text-slate-600 flex items-center">
					{(() => {
						switch (statsFor) {
							case "stars":
								return <Stars />;
							case "likes":
								return <Likes />;
							case "views":
								return <Views />;
							case "loved":
								return <Loved />;
						}
					})()}
					<span className="text-sm ml-1">
						{abbreviateNumber(statsValue)}
					</span>
				</div>
			</>
		);
	}
}
