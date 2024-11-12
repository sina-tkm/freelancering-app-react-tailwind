import React, { useState } from "react";
import Table from "../../../style/ui/Table";
import Modal from "../../../style/ui/Modal";
import ChangeProposalStatus from "../../Project/ChangeProposalStatus";
import ChangeUserStatus from "./ChangeUserStatus";

function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
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
  const { status } = user;
  return (
    <Table.row key={user._id}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>

      <td>
        <Modal
          title='تغییر وضعیت درخواست'
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.row>
  );
}

export default UserRow;
