import {
  HiCollection,
  HiHome,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";
import AppLayOut from "../../style/ui/AppLayOut";
import CustomNavlink from "../../style/ui/CustomNavLink";
import SideBar from "../../style/ui/SideBar";

function AdminLayout() {
  return (
    <AppLayOut>
      <SideBar>
        <CustomNavlink to='dashboard'>
          <HiHome />
          <span>داشبورد</span>
        </CustomNavlink>
        <CustomNavlink to='users'>
          <HiUser />
          <span>کاربران</span>
        </CustomNavlink>
        <CustomNavlink to='projects'>
          <HiOutlineViewGrid />
          <span>پروژه ها</span>
        </CustomNavlink>
        <CustomNavlink to='proposals'>
          <HiCollection />
          <span>پروپوزال ها</span>
        </CustomNavlink>
      </SideBar>
    </AppLayOut>
  );
}

export default AdminLayout;
