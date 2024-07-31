import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
function RequireAuth() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
}

export default RequireAuth;
