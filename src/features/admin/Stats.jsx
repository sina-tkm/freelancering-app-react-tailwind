import React from "react";
import Stat from "../../style/ui/stat";
import { HiCollection, HiOutlineViewGrid, HiUsers } from "react-icons/hi";

function Stats({ users, projects, proposals }) {
  return (
    <div className='grid grid-cols-3 gap-8'>
      <Stat
        color='orange'
        title='کاربران'
        value={users}
        icon={<HiUsers className='w-20 h-20' />}
      />
      <Stat
        color='primary'
        title=' درخواست ها '
        value={proposals}
        icon={<HiOutlineViewGrid className='w-20 h-20' />}
      />
      <Stat
        color='green'
        title='پروژه ها'
        value={projects}
        icon={<HiCollection className='w-20 h-20' />}
      />
    </div>
  );
}

export default Stats;
