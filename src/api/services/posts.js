import { api } from "./api";

export const postsApi = api.injectEndpoints({
	endpoints: build => ({
		getAllPosts: build.query({
			query: () => ({
				url: "posts",
				method: "GET",
			}),
			transformResponse: resp => resp.sort((a, b) => b.id - a.id),
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: "Posts", id })),
							{ type: "Posts", id: "LIST" },
					  ]
					: [{ type: "Posts", id: "LIST" }],
		}),
		getPostsByPagination: build.query({
			query: page => ({
				url: `posts?_page=${page}&_limit=10`,
				method: "GET",
			}),

			providesTags: result => [
				...result.map(({ id }) => ({ type: "Posts", id }), {
					type: "Posts",
					id: "LIST",
				}),
			],
		}),

		getPost: build.query({
			query: id => ({
				url: `posts/${id}`,
				method: "GET",
			}),
			providesTags: (result, error, id) => [
				{ type: "Posts", id },
				{ type: "Posts", id: "LIST" },
			],
		}),

		addPost: build.mutation({
			query: body => ({
				url: "/posts",
				method: "POST",
				body,
			}),
			invalidatesTags: [{ type: "Posts", id: "LIST" }],
		}),

		editPost: build.mutation({
			query: ({ id, ...rest }) => ({
				url: `posts/${id}`,
				method: "PATCH",
				body: rest,
			}),
			invalidatesTags: (result, error, id) => [
				{ type: "Posts", id },
				{ type: "Posts", id: "LIST" },
			],
		}),

		deletePost: build.mutation({
			query: id => ({
				url: `posts/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [{ type: "Posts", id }],
		}),
	}),
});

export const {
	useGetAllPostsQuery,
	useGetPostsByPaginationQuery,
	useGetPostQuery,
	useDeletePostMutation,
	useAddPostMutation,
	useEditPostMutation,
} = postsApi;
