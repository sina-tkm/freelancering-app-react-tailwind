import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusApi } from "../../../services/authservice";

export default function useChangeUserStatus() {
  const { isPending: isUpdating, mutate: ChangeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      const errorMessage =
        err?.response?.data?.statusCode || "An error occurred";
      toast.error(errorMessage);
    },
  });
  return { isUpdating, ChangeUserStatus };
}
