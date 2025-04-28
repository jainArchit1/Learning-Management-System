import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../authSlice";

const USER_API = "http://localhost:5000/api/v1/";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (inputData) => {
        console.log("📤 Sending Signup Data:", inputData);
        return {
          url: "signup",
          method: "POST",
          body: inputData,
        };
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("✅ Signup Successful:", result.data);
        } catch (error) {
          console.error(" Signup Error:", error);
          if (error.error) {
            console.error(" Error Details:", error.error);
          }
          if (error.data) {
            console.error(" Server Response:", error.data);
          }
        }
      },
    }),

    loginUser: builder.mutation({
      query: (inputData) => {
        console.log("📤 Sending Login Data:", inputData);
        return {
          url: "login",
          method: "POST",
          body: inputData,
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data.user }));
          console.log("✅ Login Successful:", result.data);
        } catch (error) {
          console.error("❌ Login Error:", error);
          if (error.error) {
            console.error("🛑 Error Details:", error.error);
          }
          if (error.data) {
            console.error("🛑 Server Response:", error.data);
          }
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
export default authApi;
