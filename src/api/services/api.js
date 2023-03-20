import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:3005",
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 4 });

export const api = createApi({
	reducerPath: "splitApi",
	baseQuery: baseQueryWithRetry,
	tagTypes: ["Posts", "Users"],
	endpoints: () => ({}),
});
