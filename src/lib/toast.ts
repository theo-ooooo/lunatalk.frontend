import { toast } from "react-toastify";

export default function CustomToast(
  type: "success" | "error",
  message: string
) {
  toast[type](message, { position: "bottom-center", theme: "dark" });
}
