import { useQuery } from "@tanstack/react-query";
import {getProposalsApi} from "../../services/prposalService";

export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryKey: ["proposal"],
    queryFn: getProposalsApi,
  });
  const { proposals } = data || {};
  return { proposals, isLoading };
}
