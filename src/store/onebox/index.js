import { STATUS } from "@/constants";
import { apis } from "@/services/api";
import { ErrorAlert, SuccessAlert } from "@/utils/Helper";
import { create } from "zustand";

export const useOneboxStore = create((set, get) => ({
  resetStatus: async () => {
    set({
      getListStatus: STATUS.NOT_STARTED,
    });
  },

  getListAction: async (payload) => {
    set({ getListStatus: STATUS.FETCHING });
    const { data, ok } = await apis.getOneboxListApi(payload);
    if (ok) {
      set({ getListStatus: STATUS.SUCCESS, oneboxData: data.data });
    } else {
      set({ getListStatus: STATUS.FAILED });
      ErrorAlert(data?.errorMessage || "Something Went Wrong");
    }
  },
}));
