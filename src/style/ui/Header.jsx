import UserAvatar from "../../features/authentication/UserAvatar";
import useUser from "../../features/authentication/useUser";
import HeaderMenu from "../ui/HeaderMenu";
function Header() {
  const { user, isLoading } = useUser();

  return (
    <div className='bg-secondary-0 py-4 px-8 border-secondary-200 border'>
      <div
        className={`container  xl:max-w-screen-lg flex items-center justify-end gap-x-8
        ${isLoading ? " opacity-50blur-sm" : ""} `}
      >
        <UserAvatar user={user} />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
