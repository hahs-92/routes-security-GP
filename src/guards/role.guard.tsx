import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, Roles } from "../models";
import { AppStore } from "../redux/store";

interface IRoleGuard {
  role: Roles;
}

const roleGuard: React.FC<IRoleGuard> = ({ role }) => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.role === role ? (
    <Outlet />
  ) : (
    <Navigate replace to={`/${PrivateRoutes.PRIVATE}`} />
  );
};

export default roleGuard;
