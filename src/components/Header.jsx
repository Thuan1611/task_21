import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
  const navi = useNavigate();
  const logOut = () => {
    localStorage.clear();
    alert("đã đăng xuất");
    navi("auth/register");
  };
  return (
    <header>
      <ul className={style.nav}>
        <li>
          <Link to="/products">Home</Link>
        </li>
        <li>
          <Link to="/auth/register">Đăng kí</Link>
        </li>
        <li>
          <Link to="/auth/login">Đăng nhập</Link>
        </li>
        <li>
          <Link to="/category">Danh mục</Link>
        </li>
        <li>
          <button className="btn btn-danger" onClick={() => logOut()}>
            Đăng xuất
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
