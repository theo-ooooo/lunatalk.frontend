import Menu from "@/components/common/Menu";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Menu /> {children}
    </div>
  );
}
