import BackHeader from "@/components/common/layout/BackHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BackHeader /> {children}
    </div>
  );
}
