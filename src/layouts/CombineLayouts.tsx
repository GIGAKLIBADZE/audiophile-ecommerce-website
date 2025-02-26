import React from "react";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import { Outlet } from "react-router-dom";

const CombineLayout: React.FC = () => {
  return (
    <div>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </div>
  );
};

export default CombineLayout;
