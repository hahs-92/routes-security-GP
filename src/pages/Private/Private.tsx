import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { Dashboard } from "./Dashboard";
import { Home } from "./Home";

const Private = () => {
  return (
    <>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </>
  );
};

export default Private;
