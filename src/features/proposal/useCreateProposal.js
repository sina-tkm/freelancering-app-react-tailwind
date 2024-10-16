import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalApi } from "../../services/prposalService";

export default function useCreateProposal() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: createProposal,
    isPending: isCreating,
  } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["proposal"],
      });
    },
    onError: (err) => {
      const errorMessage =
        err?.response?.data?.statusCode || "An error occurred";
      toast.error(errorMessage);
    },
  });
  return { isCreating, createProposal };
}
