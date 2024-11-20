import BackHeader from "@/components/common/layout/BackHeader";
import BackHeaderSkeleton from "@/components/common/layout/BackHeaderSkeleton";
import SearchBar from "@/components/search/SearchBar";
import { Suspense } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Suspense fallback={<div>...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}
