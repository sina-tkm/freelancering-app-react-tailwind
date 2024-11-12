import React from "react";
import Table from "../../../style/ui/Table";
import Loading from "../../../style/ui/Loading";
import { useUsers } from "../useUsers";
import UserRow from "./UserRow";

function UserTables() {
  const { users, isLoading } = useUsers();

  if (isLoading) return <Loading />;
  if (!users.length) return <Empty resouseName=' کاربران' />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} index={index} user={user} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UserTables;
