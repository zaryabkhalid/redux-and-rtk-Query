import { useState } from "react";
import PostCard from "./PostCard";
import { useGetPostsByPaginationQuery } from "../../api/services/posts";

function Pagination() {
	const [page, setPage] = useState(1);
	const {
		isLoading,
		isError,
		isSuccess,
		error,
		data: posts,
	} = useGetPostsByPaginationQuery(page);

	const handleNext = () => {
		setPage(prev => prev + 1);
	};

	const handlePrev = () => {
		setPage(prev => prev - 1);
	};

	let total = posts?.length;

	let content;
	if (isLoading) {
		content = <p className="text-teal-500 text-5xl text-center">Loading...</p>;
	}
	if (isError) {
		content = <p className="text-red-500 text-sm text-center">{error}</p>;
	}

	if (isSuccess) {
		content = posts?.map(post => (
			<PostCard key={post.id} post={post} type="pagination" />
		));
	}

	return (
		<>
			<div className="container mx-auto h-[100%] flex flex-col gap-8  mt-24">
				<div className="flex justify-end items-center">
					{/* Nav Component */}
				</div>

				{/* Post Cards Component */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
					{content}
				</div>

				{/* Pagination button component */}
				<div className=" flex justify-end items-center gap-2 mt-8">
					<button
						className="min-w-[100px] bg-teal-500 text-zinc-800 rounded transition-colors duration-500 hover:bg-teal-600"
						onClick={handlePrev}
						disabled={page <= 1}>
						Prev
					</button>
					<span className="text-white text-lg">{page}</span>
					<button
						className="min-w-[100px] bg-teal-500 text-zinc-800 rounded transition-colors duration-500 hover:bg-teal-600"
						onClick={handleNext}
						disabled={page >= total}>
						Next
					</button>
				</div>
			</div>
		</>
	);
}

export default Pagination;
