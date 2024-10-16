import Modal from "../../../style/ui/Modal";
import Table from "../../../style/ui/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import toPersianNumbers from "../../../utils/toPersianNumbers";
import { MdAssignmentAdd } from "react-icons/md";
import truncateText from "../../../utils/truncateText";
import { useState } from "react";
import CreateProposal from "../../proposal/CreateProposal";
const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};
function ProjectRow({ project, index }) {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);
  return (
    <Table.row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbers(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {" "}
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ی ${title}`}
        >
          <CreateProposal projectId={project._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className='w-5 h-5 text-primary-900' />
        </button>
      </td>
    </Table.row>
  );
}

export default ProjectRow;
