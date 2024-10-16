import React from "react";
import useOwnerProjects from "../../projects/useOwnerProjects";
import Loading from "../../../style/ui/Loading";
import Empty from "../../../style/ui/Empty";
import Table from "../../../style/ui/Table";
import useProjects from "../../../hooks/useProject";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resouseName=' پروژه ای' />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت </th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} index={index} project={project} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
