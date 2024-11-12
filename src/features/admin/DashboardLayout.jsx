import useProjects from "../../hooks/useProject";
import Loading from "../../style/ui/Loading";
import DashboardHeader from "../freelancer/DashboardHeader";
import useProposals from "../proposal/useProposals";
import Stats from "./Stats";
import { useUsers } from "./useUsers";

function DashboardLayout() {
  const { proposals, isLoading: isLoading1 } = useProposals();
  const { projects, isLoading: isLoading2 } = useProjects();
  const { users, isLoading: isLoading3 } = useUsers();
  if (isLoading1 || isLoading2 || isLoading3) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        projects={projects.length}
        users={users.length}
      />
    </div>
  );
}

export default DashboardLayout;
