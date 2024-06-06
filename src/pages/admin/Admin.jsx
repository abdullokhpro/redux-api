import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./admin.scss";
import { DiVim } from "react-icons/di";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Admin;
