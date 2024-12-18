import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";

const BigSideBar = () => {
  const { ShowSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          ShowSidebar ? "sidebar-container" : "sidebar-container  show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
