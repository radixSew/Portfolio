import React, { useState } from "react";
import "../css/header.css";
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navContaioner">
      <a to="/" className="headerName">
        <h2 className="headerFname">Radhika Nanayakkara</h2>
      </a>
      <ul className="navList">
        {navItems.map((item, index) => (
          <li key={index} className="navItem">
            <a href={item.link} className="navLink">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {/* <div className="talks">
        <button className="letTalk">Downloade CV</button>
      </div> */}

      <div className="mobileMenu">
        <div className="menuIcon" onClick={toggleNav}>
          {isOpen ? <CloseOutlined /> : <MenuOutlined />}
        </div>
        {isOpen && (
          <div className="mobileSideNav">
            <ul className={"mobileNavList"}>
              {navItems.map((item, index) => (
                <li key={index} className="mobileNavItem">
                  <a href={item.link} className="mobileNavLink">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <button className="letTalk mobileLetTalk">Download CV</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
