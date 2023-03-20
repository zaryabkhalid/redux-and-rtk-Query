import React from "react";
import { Link } from "react-router-dom";
import Helper from "../../utils/Helpers";

function PostCard({ post, type }) {
	const bodyContent = Helper.elipses(post.body, 60);

	return (
		<>
			{type !== "pagination" ? (
				<Link to={`post/${post.id}`}>
					<article className="border border-teal-500 rounded min-h-[160px] px-5 py-3 text-teal-500 flex flex-col justify-around gap-2 transition duration-300 hover:shadow-lg hover:shadow-teal-500 cursor-pointer">
						<h2 className="text-xl">{post.title}</h2>
						<p className="text-sm text-white">
							{type === "pagination" ? bodyContent : post.body}
						</p>
					</article>
				</Link>
			) : (
				<article className="border border-teal-500 rounded min-h-[160px] px-5 py-3 text-teal-500 flex flex-col justify-around gap-2 transition duration-300 hover:shadow-lg hover:shadow-teal-500 cursor-pointer">
					<h2 className="text-xl">{post.title}</h2>
					<p className="text-sm text-white">
						{type === "pagination" ? bodyContent : post.body}
					</p>
				</article>
			)}
		</>
	);
}

export default PostCard;
