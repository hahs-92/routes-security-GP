import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../../models";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home</h2>
      <h4>Solo usuarios con role: admin pueden ir a Dashboard</h4>
      <button
        onClick={() =>
          navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.DASHBOARD}`)
        }
      >
        Ir a Dashboard
      </button>
    </div>
  );
};

export default Home;
