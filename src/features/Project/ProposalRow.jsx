import Table from "../../style/ui/Table";
import Modal from "../../style/ui/Modal";
import truncateText from "../../utils/truncateText";
import { useState } from "react";
import ChangeProposalStatus from "./ChangeProposalStatus";
const statusStyle = [
  {
    label: "رد شده ",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];
function ProposalRow({ proposal, index }) {
  const { status} = proposal;
  const [open, setOpen] = useState(false);
  return (
    <Table.row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration}روز</td>
      <td>{proposal.price}</td>
      <td className={`badge ${statusStyle[status].className} my-4`}>
        {statusStyle[status].label}
      </td>
      <td>
        <Modal
          title='تغییر وضعیت درخواست'
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
      
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.row>
  );
}

export default ProposalRow;
