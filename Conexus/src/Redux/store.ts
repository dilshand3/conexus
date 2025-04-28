import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice/AutheSlice";
import { ShortUrlSlice } from "./ShortUrlSlice/ShortUrlSlice";

export const store = configureStore({
    reducer: {
        [AuthSlice.reducerPath]: AuthSlice.reducer,
        [ShortUrlSlice.reducerPath]: ShortUrlSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            AuthSlice.middleware,
            ShortUrlSlice.middleware
        ),
})