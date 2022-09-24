import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../../models";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate(`/${PrivateRoutes.PRIVATE}`)}>
        Ir a Home
      </button>
    </div>
  );
};

export default Dashboard;
