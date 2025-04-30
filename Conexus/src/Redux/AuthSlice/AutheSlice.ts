import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { API_KEY as api } from "@env";

const api = "http://192.168.43.249:2392"

interface IAuthRequest {
    username: string;
    name?: string;
    password: string;
}

interface IAuthResponse {
    usId?: string;
    success: boolean;
    message: string;
    data?: object
}

export const AuthSlice = createApi({
    reducerPath: "AuthSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: api,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        signup: builder.mutation<IAuthResponse, IAuthRequest>({
            query: (formData) => ({
                url: "/api/user/signup",
                method: "POST",
                body: formData
            })
        }),
        login: builder.mutation<IAuthResponse, IAuthRequest>({
            query: (formData) => ({
                url: "/api/user/login",
                method: "POST",
                body:formData
            })
        })
    })
})

export const { useSignupMutation, useLoginMutation } = AuthSlice