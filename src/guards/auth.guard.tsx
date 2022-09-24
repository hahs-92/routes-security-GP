import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "../models/routes";
import { AppStore } from "../redux/store";

interface IAuthGuardProps {
  privateRoute: boolean;
}

export const AuthGuard: React.FC<IAuthGuardProps> = ({ privateRoute }) => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.name ? (
    privateRoute ? (
      <Outlet />
    ) : (
      <Navigate replace to={PrivateRoutes.PRIVATE} />
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;

// 1:40:00
