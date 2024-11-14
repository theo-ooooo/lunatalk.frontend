import BackHeader from "@/components/common/layout/BackHeader";
import BackHeaderSkeleton from "@/components/common/layout/BackHeaderSkeleton";
import { Suspense } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Suspense fallback={<BackHeaderSkeleton />}>
        <BackHeader />
      </Suspense>
      {children}
    </div>
  );
}
