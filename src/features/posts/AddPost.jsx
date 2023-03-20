import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddPostMutation } from "../../api/services/posts";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

function AddPost() {
	const [postText, setPostText] = useState({
		userId: 1,
		title: "",
		body: "",
	});
	const nevigate = useNavigate();
	const [addPost] = useAddPostMutation();

	const handleChange = e => {
		setPostText(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		await addPost(postText);
		nevigate("/posts");
	};

	return (
		<section className="relative top-24">
			<form
				onSubmit={handleSubmit}
				className="max-w-[550px] mx-auto flex flex-col gap-4">
				<h2 className="text-white text-4xl text-center py-4">Add Post</h2>

				<ArrowLeftCircleIcon
					className="w-10 h-10 text-white animate-pulse cursor-pointer self-end"
					onClick={() => {
						nevigate(-1);
					}}
				/>

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
					type="submit"
					className="inline-block max-w-[160px] text-white bg-zinc-800 py-2 px-6 transition-colors duration-300 hover:bg-teal-900
					shadow rounded">
					Send Post
				</button>
			</form>
		</section>
	);
}

export default AddPost;
