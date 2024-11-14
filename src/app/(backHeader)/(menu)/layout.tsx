import Menu from "@/components/common/layout/Menu";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
