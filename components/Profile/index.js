import React from "react";
import { userData } from "@/public/data";
import StatsCard from "./StatsCard";
import Image from "next/image";
import Diamond from "@/public/icons/Diamond";
import Check from "@/public/icons/Check";

export default function Profile() {
	return (
		<>
			<Image
				src={"/" + userData.coverPicture}
				alt="cover"
				className="h-[150px] w-full object-cover"
				height={150}
				width={500}
				quality={100}
			/>
			<div className="px-5 mb-4">
				<div className="grid grid-cols-12">
					<Image
						src={"/" + userData.profilePicture}
						alt=""
						className="w-[90px] h-[90px] rounded-full border-2 border-gray  -mt-5 col-span-4 md:col-span-2"
						width={90}
						height={90}
						quality={100}
					/>
					<div className="col-span-6 mt-1">
						<div className="flex gap-1 items-center">
							<h1 className="font-bold">{userData.name}</h1>
							{/* TODO: Add Icons */}
							<Diamond />
							<Check />
						</div>
						<div className="flex gap-2 text-sm">
							<StatsCard
								statsFor="followers"
								statsValue={userData.followers}
							/>
							<StatsCard
								statsFor="following"
								statsValue={userData.following}
							/>
						</div>
					</div>
				</div>
				<div className="text-slate-600 text-sm mt-2">
					{userData.bio}
				</div>
				<a
					href={userData.instagram}
					className="text-cyan-500 text-sm inline-block mb-2"
				>
					{userData.instagram}
				</a>
				<div className="flex gap-4 items-center">
					<StatsCard
						statsFor="stars"
						statsValue={userData.stats.stars}
					/>
					<StatsCard
						statsFor="likes"
						statsValue={userData.stats.likes}
					/>
					<StatsCard
						statsFor="views"
						statsValue={userData.stats.views}
					/>
					<StatsCard
						statsFor="loved"
						statsValue={userData.stats.loved}
					/>
				</div>
			</div>
		</>
	);
}
