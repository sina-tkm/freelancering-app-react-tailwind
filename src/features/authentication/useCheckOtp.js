import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authservice";

export default function useCheckOtp() {
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: checkOtp,
    onSuccess: (data) => {

    },
    onError: (error) => {
      console.error("OTP verification failed:", error);
    },
  });

  return { isLoading, mutateAsync };
}