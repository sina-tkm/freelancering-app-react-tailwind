import { useEffect } from "react";
import useAuthorized from "../../features/authentication/useAthorized";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isAuthorized, user, isLoading, isVerified } =
    useAuthorized();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("`پروفایل شما هنوز تایید نشده است ");
      navigate("/not-access");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access");
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);
  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen bg-secondary-100'>
        <Loading />;
      </div>
    );
  }
  if (isAuthenticated && isAuthorized) {
    return children;
  }
}

export default ProtectedRoute;
