import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
  const { search } = useLocation();
  // const objectQuery = queryString.parse(search);
  const objectQuery = Object.fromEntries(new URLSearchParams(search));

  const { data, isLoading } = useQuery({
    queryKey: ["projects", objectQuery],
    queryFn: () => getProjectsApi(search),
  });
  const { projects } = data || {};
  return { isLoading, projects };
}
