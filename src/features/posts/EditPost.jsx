import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditPostMutation, useGetPostQuery } from "../../api/services/posts";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

function EditPost() {
	const { postId } = useParams();
	const { data } = useGetPostQuery(postId);
	const [editPost] = useEditPostMutation(postId);
	const navigate = useNavigate();
	const [postText, setPostText] = useState({
		id: data?.id,
		userId: data?.userId,
		title: data?.title,
		body: data?.body,
	});
	const handleChange = e => {
		setPostText(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	const handleSubmit = async e => {
		e.preventDefault();
		await editPost(postText);
		navigate(-1, { replace: "true" });
	};

	return (
		<section className=" relative top-24">
			<form className="max-w-[550px] mx-auto flex flex-col gap-4">
				<h2 className="text-white text-4xl text-center py-4">Edit Post</h2>

				<ArrowLeftCircleIcon
					className="w-10 h-10 text-white animate-pulse cursor-pointer self-end"
					onClick={() => {
						navigate(-1);
					}}
				/>

				<h2 className="text-teal-500 text-2xl">Post Id: {data?.id}</h2>
				<h3 className="text-teal-500 text-2xl">User Id: {data?.userId}</h3>
				<input
					type="text"
					placeholder="Title"
					name="title"
					id="title"
					value={postText.title}
					className="p-2 rounded"
					onChange={handleChange}
				/>

				<textarea
					className="inline-block p-2 w-full outline-none border-none rounded "
					rows={4}
					name="body"
					id="body"
					value={postText.body}
					placeholder="Write..."
					onChange={handleChange}
				/>

				<button
					type="button"
					onClick={handleSubmit}
					className="inline-block max-w-[160px] text-white bg-zinc-800 py-2 px-6 transition-colors duration-300 hover:bg-teal-900
					shadow rounded">
					Update Post
				</button>
			</form>
		</section>
	);
}

export default EditPost;
