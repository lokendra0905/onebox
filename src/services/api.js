import { URIS, apiClient } from ".";

export const apis = {
  /* Auth */
  googleAuthApi: (payload) =>
    apiClient.get(URIS.GOOGLE_AUTH, { ...payload, redirect_to: "http://localhost:3000" }),
  getOneboxListApi: (payload) => apiClient.get(URIS.GET_LIST, payload),
  
};
