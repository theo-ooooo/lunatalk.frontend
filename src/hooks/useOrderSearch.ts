import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function useOrderSearch() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value || "");
  };

  const encodeText = (text: string) => {
    return Buffer.from(text).toString("base64");
  };

  const decodeText = (text: string) => {
    return Buffer.from(text, "base64").toString();
  };

  const handleOnEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const encode = encodeText(searchText);
        router.push(`/mypage/order/list?keyword=${encode}`);
      }
    },
    [searchText]
  );

  const handleClick = () => {
    const encode = encodeText(searchText);
    router.push(`/mypage/order/list?keyword=${encode}`);
  };

  return {
    searchText,
    encodeText,
    decodeText,
    handleOnChange,
    handleOnEnter,
    handleClick,
  };
}
