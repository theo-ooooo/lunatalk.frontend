import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function useSearch() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value || "");
  };

  const onReset = () => {
    setSearchText("");
    router.push("/search");
  };

  const onEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const encode = Buffer.from(searchText).toString("base64");
      if (e.key === "Enter") {
        router.push(`/search?q=${encode}`);
      }
    },
    [router, searchText]
  );
  return {
    searchText,
    setSearchText,
    onChange,
    onReset,
    onEnter,
  };
}
