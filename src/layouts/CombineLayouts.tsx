import React from "react";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchInformation } from "../features/data/dataSlice";
import { AppDispatch } from "../store";
import { useEffect } from "react";

const CombineLayout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchInformation());
  }, [dispatch]);

  return (
    <div style={{ position: "relative" }}>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </div>
  );
};

export default CombineLayout;
