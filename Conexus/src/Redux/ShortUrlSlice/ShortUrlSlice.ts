import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY as api } from "@env";

interface IshortUrlReq {
    originalUrl: string;
}

interface IshortUrlRes {
    success: boolean;
    message: string;
    data?: object;
}

export const ShortUrlSlice = createApi({
    reducerPath: "ShortUrlSlice",
    baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.43.249:2392" }),
    endpoints: (builder) => ({
        createShorturl: builder.mutation<IshortUrlRes, IshortUrlReq>({
            query: ({originalUrl}) => ({
                url: "/api/createURL",
                method: "POST",
                body:  {originalUrl} ,
            })
        }),
    })
})

export const { useCreateShorturlMutation } = ShortUrlSlice;