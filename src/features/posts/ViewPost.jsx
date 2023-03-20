import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import {
	useGetPostQuery,
	useDeletePostMutation,
} from "../../api/services/posts";

function ViewPost() {
	const navigate = useNavigate();

	const { postId } = useParams();
	const [deletePost] = useDeletePostMutation();
	const { isLoading, isSuccess, isError, error, data } =
		useGetPostQuery(postId);

	const handleDelete = async () => {
		await deletePost(postId);
		navigate(-1);
	};

	let content;

	if (isLoading) {
		content = <p className="text-center text-teal-500">Loading...</p>;
	}

	if (isError) {
		content = <p className="text-center text-red-500">{error}</p>;
	}

	if (isSuccess) {
		content = (
			<div className="text-teal-500 max-w-2xl">
				<p className="text-3xl mb-5">POST ID: {data.id}</p>
				<h2 className="font-semibold mb-5">{data.title}</h2>
				<p className="text-white mb-5">{data.body}</p>
				<p className="text-xl mb-5">USER ID: {data.userId}</p>

				<button
					className="bg-teal-500 text-zinc-900 px-8 py-1 rounded-2xl transition duration-300 ease-in-out hover:bg-teal-600"
					onClick={() => {
						navigate(`edit`);
					}}>
					Edit Post
				</button>

				<button
					className="px-8 py-1 bg-teal-500 text-zinc-900 rounded-2xl transition duration-300 ease-in-out hover:bg-teal-600 ml-2"
					onClick={handleDelete}>
					Delete
				</button>
			</div>
		);
	}

	return (
		<>
			<article className="container h-screen flex flex-col justify-center items-center gap-8 text-center mx-auto">
				<div className="flex justify-between items-center space-x-10">
					<p className="text-4xl text-teal-500 font-bold">Single View Post</p>

					<ArrowLeftCircleIcon
						className="w-10 h-10 text-white animate-pulse cursor-pointer self-end"
						onClick={() => navigate(-1)}
					/>
				</div>
				{content}
			</article>
		</>
	);
}

export default ViewPost;
