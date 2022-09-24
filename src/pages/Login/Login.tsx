import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser, resetUser, UserKey } from "../../redux/states/user";
import { getMorty } from "../../services";
import { PrivateRoutes, PublicRoutes } from "../../models/routes";
import { useEffect } from "react";
import { clearLocalStorage } from "../../utilities";
import { Roles } from "../../models/roles";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({ ...result, role: Roles.ADMIN }));

      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  return (
    <div>
      <h2>Este es nuestro login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
