"use client";
import { setAuthToken } from "@/services";
import { ErrorAlert } from "@/utils/Helper";
import { useRouter, useSearchParams } from "next/navigation";
import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const search = useSearchParams();

  useEffect(() => {
    let token = window.localStorage.getItem("token");
    const querytoken = search.get('token')
    if (token == "null" || !token || !querytoken) {
      router.push("/login");
    //   ErrorAlert("Invalid Token");
    }
  }, [router]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
