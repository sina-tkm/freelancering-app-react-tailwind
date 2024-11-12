import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorized() {
  const { user, isLoading } = useUser();
  const { pathname } = useLocation();

  const isAuthenticated = !!user;

  let isAuthorized = false;
  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;
  const ROLE = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const desireRole = pathname.split("/").at(1);
  if (user && Object.keys(ROLE).includes(desireRole)) {
    if (user.role === ROLE[desireRole]) {
      isAuthorized = true;
    }
  }

  return { isAuthorized, isLoading, user, isAuthenticated, isVerified };
}
