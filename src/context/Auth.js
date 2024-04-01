"use client";
import { setAuthToken } from "@/services";
import { ErrorAlert } from "@/utils/Helper";
import { useRouter } from "next/navigation";
import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    let token = window.localStorage.getItem("token");
    if (token == "null" || !token) {
      router.push("/login");
      ErrorAlert("Invalid Token");
    }
  }, [router]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
