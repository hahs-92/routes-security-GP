import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { RoleGuard } from "../../guards";
import { PrivateRoutes, Roles } from "../../models";
import RoutesWithNotFound from "../../utilities/RoutesWithNotFound";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />

      <Route element={<RoleGuard role={Roles.ADMIN} />}>
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default Private;
