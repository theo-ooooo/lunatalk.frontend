import SearchBody from "@/components/search/SearchBody";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return <SearchBody keyword={searchParams.q || ""} />;
}
