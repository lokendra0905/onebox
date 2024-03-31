import { STATUS } from "@/constants";
import { apis } from "@/services/api";
import { ErrorAlert, SuccessAlert } from "@/utils/Helper";
import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
  resetStatus: async () => {
    set({
      googleAuthStatus: STATUS.NOT_STARTED,
    });
  },

  googleAuthAction: async (payload) => {
    set({ googleAuthStatus: STATUS.FETCHING });
    const { data, ok } = await apis.googleAuthApi(payload);
    if (ok) {
      set({ googleAuthStatus: STATUS.SUCCESS });
      SuccessAlert("Login Successful");
    } else {
      set({ googleAuthStatus: STATUS.FAILED });
      ErrorAlert(data?.errorMessage || "Something Went Wrong");
    }
  },
}));
