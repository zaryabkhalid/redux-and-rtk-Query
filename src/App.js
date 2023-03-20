import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewPost from "./features/posts/ViewPost";
import AddPost from "./features/posts/AddPost";
import FeaturedPosts from "./features/posts/FeaturedPosts";
import Layout from "./components/Layout";
import Pagination from "./features/posts/Pagination";
import PostsLayout from "./features/posts/PostsLayout";
import EditPost from "./features/posts/EditPost";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />

				<Route path="posts">
					<Route index element={<FeaturedPosts />} />
					<Route path="post/:postId" element={<ViewPost />} />
					<Route path="post/:postId/edit" element={<EditPost />} />
				</Route>
				<Route path="post/new" element={<AddPost />} />

				<Route path="pagination" element={<PostsLayout />}>
					<Route index element={<Pagination />} />
				</Route>
			</Route>
			{/* <Route path="*" /> */}
		</Routes>
	);
}

export default App;
