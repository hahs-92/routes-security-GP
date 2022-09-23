import { useDispatch } from "react-redux";
import { createUser } from "../../redux/states/user";
import { getMorty } from "../../services";

const Login = () => {
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result));
    } catch (error) {}
  };

  return (
    <div>
      <h2>Este es nuestro login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
