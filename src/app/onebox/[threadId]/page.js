"use client";

import { MainLayout } from "@/layout/MainLayout";
import { Onebox } from "@/page/onebox";

export default function Page({ params }) {
  return (
    <MainLayout>
      <Onebox threadId={params?.threadId} />
    </MainLayout>
  );
}
