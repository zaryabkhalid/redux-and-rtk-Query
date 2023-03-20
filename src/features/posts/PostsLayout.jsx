import { Outlet } from "react-router-dom";

function PostsLayout() {
	return (
		<>
			<section className="container mx-auto min-h-screen flex flex-col justify-center gap-8">
				<Outlet />
			</section>
		</>
	);
}

export default PostsLayout;
