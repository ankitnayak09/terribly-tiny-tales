import Likes from "@/public/icons/Likes";

export default function Post({
	title,
	contentType,
	content,
	topic,
	postBy,
	listHeading,
	views,
	readingTime,
	date,
}) {
	return (
		<div className="border border-transparent border-2 border-b-slate-200 py-5 px-4">
			<div className="flex justify-between items-center mb-2">
				<h2 className="font-bold text-lg">{title}</h2>
				<Likes />
			</div>
			{/* Render Content Based on Content Type */}
			{(() => {
				switch (contentType) {
					case "Paragraph":
						return (
							<>
								{content.map((para) => (
									<p className="text-sm text-slate-700 my-6">
										{para}
									</p>
								))}
							</>
						);
					case "List":
						return (
							<>
								<p className="my-4">{listHeading}</p>
								<ul className="list-disc list-inside text-sm text-slate-700 mb-6">
									{content.map((item) => (
										<li className="list-none">- {item}</li>
									))}
								</ul>
							</>
						);
				}
			})()}
			<div className="flex justify-between">
				<p className="text-xs">
					<span className="text-cyan-500 font-medium">{topic}</span>{" "}
					<span className="text-[#7E7E7EFF] font-medium">
						by {postBy}
					</span>
				</p>
				<p className="text-[#7E7E7EFF] text-xs">
					{date} &#183; {readingTime} &#183; {views} Views
				</p>
			</div>
		</div>
	);
}
