import React, { useRef, useState } from "react";
import "./Navbar.css";
import { UserIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

function Navbar({ setOpenMenu }) {
  const [navbarBgChange, setNavbarBgChange] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBgChange(true);
    } else {
      setNavbarBgChange(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const openMenuHandle = () => {
    setOpenMenu((prev) => !prev);
    setSidebar(!sidebar);
    if (navbarBgChange === false) {
      setNavbarBgChange(true);
    }
    if (navbarBgChange === true && window.scrollY < 80) {
      setNavbarBgChange(false);
    }
  };

  return (
    <nav
      id="navbar-tag"
      className={
        navbarBgChange ? "navbar-container active" : "navbar-container"
      }
    >
      {/* when open the menu */}
      <div className={sidebar ? "navbar-open-menu active" : "navbar-open-menu"}>
        <div className="navbar-open-menu-item">
          <img src="./images/home/open-home.png" alt="" />
          <span>خانه</span>
        </div>
        <div className="navbar-open-menu-item">
          <img src="./images/home/open-blog.png" alt="" />
          <span>بلاگ</span>
        </div>
        <div className="navbar-open-menu-item">
          <img src="./images/home/open-app.png" alt="" />
          <span>راهنمای استفاده</span>
        </div>
        <div className="navbar-open-menu-item">
          <img src="./images/home/open-guide.png" alt="" />
          <span>اپلیکیشن</span>
        </div>
        <div className="navbar-open-menu-item">
          <img src="./images/home/open-home.png" alt="" />
          <span>دعوت دوستان</span>
        </div>
        <div className="navbar-open-menu-item">
          <img src="./images/home/open-blog.png" alt="" />
          <span>بازار تترلند</span>
        </div>
      </div>
      <div className="navbar-right-side">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <Bars3Icon onClick={openMenuHandle} className="navbar-menu-icon" />
          <img
            className="cursor-pointer"
            src={
              navbarBgChange
                ? "http://localhost:3000/images/home/logo-navbar2.svg"
                : "http://localhost:3000/images/home/logo-navbar.svg"
            }
            alt=""
          />
        </div>

        <div className="navbar-links">
          <p>خانه</p>
          <p>بلاگ</p>
          <p>راهنمای استفاده</p>
          <p>اپلیکیشن</p>
          <p>دعوت دوستان</p>
          <p>بازار تتر لند</p>
        </div>
      </div>

      <div className="navbar-user">
        <UserIcon className="w-[20px]" />
        <p>ورود/ثبت نام</p>
      </div>
    </nav>
  );
}

export default Navbar;
