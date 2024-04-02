import { STATUS } from "@/constants";
import { apis } from "@/services/api";
import { ErrorAlert, SuccessAlert } from "@/utils/Helper";
import { filter } from "lodash";
import { create } from "zustand";

export const useOneboxStore = create((set, get) => ({
  resetStatus: async () => {
    set({
      addReplyStatus: STATUS.NOT_STARTED,
      deleteThreadStatus: STATUS.NOT_STARTED,
    });
  },

  getListAction: async (payload) => {
    set({ getListStatus: STATUS.FETCHING });
    const { data, ok } = await apis.getOneboxListApi(payload);
    if (ok) {
      set({ getListStatus: STATUS.SUCCESS, oneboxData: data.data });
    } else {
      set({ getListStatus: STATUS.FAILED });
    }
  },

  getThreadAction: async (payload) => {
    set({ getThreadStatus: STATUS.FETCHING });
    const { data, ok } = await apis.getThreadApi(payload);
    if (ok) {
      set({ getThreadStatus: STATUS.SUCCESS, threadDetails: data.data });
    } else {
      set({ getThreadStatus: STATUS.FAILED });
    }
  },

  resetOneboxAction: async (payload) => {
    set({ resetOneboxStatus: STATUS.FETCHING });
    const { ok } = await apis.resetOneboxApi(payload);
    if (ok) {
      set({ resetOneboxStatus: STATUS.SUCCESS });
    } else {
      set({ resetOneboxStatus: STATUS.FAILED });
    }
  },

  deleteThreadAction: async (payload) => {
    set({ deleteThreadStatus: STATUS.FETCHING });
    const { data, ok } = await apis.deleteThreadApi(payload);
    if (ok) {
      const oneboxData = get().oneboxData;
      const filterdData = filter(oneboxData, (email) => email.threadId != payload);
      console.log(payload)
      console.log(filterdData)
      set({
        deleteThreadStatus: STATUS.SUCCESS,
        oneboxData: filterdData,
        threadDetails: null,
      });
      SuccessAlert("Thread Deleted");
    } else {
      set({ deleteThreadStatus: STATUS.FAILED });
      ErrorAlert(data.message);
    }
  },

  addReplyAction: async (threadId, payload) => {
    set({ addReplyStatus: STATUS.FETCHING });
    const { data, ok } = await apis.addReplyApi(threadId, payload);
    if (ok) {
      set({ addReplyStatus: STATUS.SUCCESS, threadDetails: data.data });
      SuccessAlert("Reply Send");
    } else {
      set({ addReplyStatus: STATUS.FAILED });
      ErrorAlert(data.message);
    }
  },
}));
