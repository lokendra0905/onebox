/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { MainLayout } from "@/layout/MainLayout";
import { Login } from "@/page/login";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { HomePage } from "@/page/home";

export default function Home() {
  const search = useSearchParams();

  useEffect(() => {
    let token = search.get("token");
    localStorage.setItem("token", token);
  }, []);

  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}
