"use client"

import { create } from "apisauce";

export const URIS = {
  /* Authentication */
  GOOGLE_AUTH: "/auth/google-login",
  /* Onbox */
  GET_LIST: "/onebox/list",
  GET_THREAD: "/onebox/messages",
  ADD_REPLY: "/onebox/reply",
  RESET_ONEBOX: "/onebox/reset",
};

let api = create({
  baseURL: "https://hiring.reachinbox.xyz/api/v1/",
  headers: {
    Accept: "application/json",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
  },
  timeout: 6000,
});
const token = window.localStorage.getItem("token");
api.setHeader("Authorization", "Bearer " + token);

export const setAuthToken = (token) => {
  api.setHeader("Authorization", "Bearer " + token);
};

export { api as apiClient };
