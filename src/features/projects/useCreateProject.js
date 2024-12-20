import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";
export default function useCreateProject() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: craeteProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      const errorMessage =
        err?.response?.data?.statusCode || "An error occurred";
      toast.error(errorMessage);
    },
  });
  return { isCreating, craeteProject };
}
