import PostCard from "./PostCard";
import { useGetAllPostsQuery } from "../../api/services/posts";

function FeaturedPosts() {
	const {
		isLoading,
		isError,
		isSuccess,
		error,
		data: posts,
	} = useGetAllPostsQuery();

	let content;
	if (isLoading) {
		content = <p className="text-teal-500 text-5xl text-center">Loading...</p>;
	}
	if (isError) {
		content = <p className="text-red-500 text-sm text-center">{error}</p>;
	}

	if (isSuccess) {
		content = posts?.map(post => <PostCard key={post.id} post={post} />);
	}

	return (
		<>
			<div className="relative top-24 container mx-auto  flex flex-col gap-8">
				<div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
					{content}
				</div>
			</div>
		</>
	);
}

export default FeaturedPosts;
