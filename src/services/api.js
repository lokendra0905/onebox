import { URIS, apiClient } from ".";

export const apis = {
  /* Auth */
  googleAuthApi: (payload) =>
    apiClient.get(URIS.GOOGLE_AUTH, { ...payload, redirect_to: "http://localhost:3000" }),

  /* Onebox */
  getOneboxListApi: (payload) => apiClient.get(URIS.GET_LIST, payload),
  getThreadApi: (threadId) => apiClient.get(`${URIS.GET_THREAD}/${threadId}`),
  deleteThreadApi: (threadId) => apiClient.delete(`${URIS.GET_THREAD}/${threadId}`),
  addReplyApi: (threadId, payload) => apiClient.post(`${URIS.ADD_REPLY}/${threadId}`, payload),
  resetOneboxApi: (payload) => apiClient.get(URIS.RESET_ONEBOX, payload),
};
