import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<nav className=" absolute w-full top-0 h-24 flex justify-between items-center px-12">
				<h1 className=" text-teal-500 text-xl font-bolder whitespace-nowrap">
					Rtk-Query & Redux-Toolkit
				</h1>
				<ul className="flex justify-center items-center space-x-5">
					<li>
						<NavLink className="text-teal-500" to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className="text-teal-500" to="posts">
							Posts
						</NavLink>
					</li>
					<li>
						<NavLink className="text-teal-500" to="pagination">
							Pagination
						</NavLink>
					</li>
					<li>
						<NavLink className="text-teal-500" to="post/new">
							AddPost
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
