import React from "react";
import { Route, Routes } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}

const RoutesWithNotFound: React.FC<IProps> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default RoutesWithNotFound;
