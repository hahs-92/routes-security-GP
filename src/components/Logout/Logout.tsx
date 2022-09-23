import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../models";
import { resetUser, UserKey } from "../../redux/states/user";
import { clearLocalStorage } from "../../utilities/localstorage";
import { useDispatch } from "react-redux";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`${PublicRoutes.LOGIN}`, { replace: true });
  };

  return <button onClick={logout}>Log out</button>;
};

export default Logout;
