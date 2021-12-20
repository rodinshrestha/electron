import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { screenShot } from "../../utils/screenShot";
import "./layout.scss";
// var screenshot = require("electron-screenshot");

const Layout = ({ children }) => {
  const { username } = useSelector((state) => state.login);

  const menuList = [
    {
      imgPath:
        "https://firebasestorage.googleapis.com/v0/b/daraz-clone.appspot.com/o/node-explorer.png?alt=media&token=5d0f8159-cae5-409a-aefd-81258457fa86",
      title: "Node Explorer",
      path: "/",
    },
    {
      imgPath:
        "https://firebasestorage.googleapis.com/v0/b/daraz-clone.appspot.com/o/node-explorer.png?alt=media&token=5d0f8159-cae5-409a-aefd-81258457fa86",
      title: "Whoola",
      path: "/youtube",
    },
    {
      imgPath:
        "https://firebasestorage.googleapis.com/v0/b/daraz-clone.appspot.com/o/node-explorer.png?alt=media&token=5d0f8159-cae5-409a-aefd-81258457fa86",
      title: "File Explorer",
      path: "/file-system",
    },

    {
      imgPath:
        "https://firebasestorage.googleapis.com/v0/b/daraz-clone.appspot.com/o/node-explorer.png?alt=media&token=5d0f8159-cae5-409a-aefd-81258457fa86",
      title: "Logout",
      path: "/logout",
    },
  ];

  return (
    <div className="layout-container">
      <div className="layout-sidebar">
        <div className="user-info-container">
          <div className="user-avatar">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/daraz-clone.appspot.com/o/user.png?alt=media&token=aa13cf6a-5047-4bf8-acef-95b833764701"
              alt="avatar"
            />
          </div>
          <div className="user-name">Welcome, {username}</div>
        </div>
        <ul className="sidebar-menu-items">
          {menuList.map((item, i) => {
            return (
              <li className="sidebar-menu-list" key={i}>
                <Link to={item.path}>
                  <div className="menulist-image">
                    <img src={item.imgPath} alt="aaaa" />
                  </div>
                  <div className="menulist-title">{item.title}</div>
                </Link>
              </li>
            );
          })}
          <li>Screen Shot</li>
        </ul>
      </div>

      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
