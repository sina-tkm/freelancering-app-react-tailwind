import React from "react";
import UserTables from "../features/admin/users/UserTables";

function Users() {
  return (
    <div>
      <div>
        <h1 className='font-black text-secondary-700 text-xl mb-8'>کاربران</h1>
        <UserTables />
      </div>
    </div>
  );
}

export default Users;
