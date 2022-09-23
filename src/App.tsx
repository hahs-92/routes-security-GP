import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthGuard } from "./guards";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import { Login, Private } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
