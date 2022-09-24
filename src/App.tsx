import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./App.css";
import { Logout } from "./components";
import { AuthGuard, RoleGuard } from "./guards";
import { Roles } from "./models";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import { Dashboard } from "./pages";
import { store } from "./redux";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound";

const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Loading...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateRoute />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
