import React from "react";
import { FaApple } from "react-icons/fa6";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdModeEdit } from "react-icons/md";
import { FaBackspace } from "react-icons/fa";
import "./sidebar.scss";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <div className="sidebar">
      <FaApple className="sidebar__apple-icon" />

      <div className="sidebar__box">
        <NavLink
          className={"sidebar__manage-products sidebar--item"}
          to={"create"}
        >
          <VscGitPullRequestCreate className="sidebar__general-icons" />

          <p>Create products</p>
        </NavLink>
        <NavLink
          className={"sidebar__create-products sidebar--item"}
          to={"manage"}
        >
          <MdModeEdit className="sidebar__general-icons" />

          <p>Manage products</p>
        </NavLink>
      </div>
      <div>
        <FaBackspace
          onClick={handleLogOut}
          className="sidebar__general-icons sidebar__exit"
        />
      </div>
    </div>
  );
};

export default Sidebar;
