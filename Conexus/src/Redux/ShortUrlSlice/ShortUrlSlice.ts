import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY as api } from "@env";

export const ShortUrlSlice = createApi({
    reducerPath: "ShortUrlSlice",
    baseQuery: fetchBaseQuery({ baseUrl: "http://172.28.240.1:2392"}),
    endpoints: (builder) => ({
        createShorturl: builder.mutation({
            query: (originalUrl) => ({
                url: "/api/createURL",
                method: "POST",
                body:  {originalUrl} ,
            })
        })
    })
})

export const { useCreateShorturlMutation } = ShortUrlSlice;