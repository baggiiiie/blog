import Link from "next/link";

export function BlogPage({ allPostsData }) {
	return (
		// page div
		<div
			className="bg-white
			text-black
			text-center
		"
		>
			{/* display sheet div */}
			<div
				className="w-[70%] max-w-[800px]
				h-[100vh] py-10
			bg-gray-100 m-auto"
			>
				{/* header div */}
				<div className="py-5">
					<h1 className="font-semibold text-2xl pb-2">
						My thoughts and gibberish
					</h1>
					<h2 className="text-sm italic">This is your hackernews style blog</h2>
				</div>
				{/* content div */}
				<div className="px-20">
					{/* individual blog div */}

					{allPostsData.map(({ id, date, title }) => (
						<Link href={`/${id}`}>
							<div className="flex justify-between hover:underline hover:bg-blue-100 px-4 hover:cursor-pointer">
								<p className="">{title}</p>
								<p>{date}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
