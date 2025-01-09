import React from "react";
import {  NavLink, Outlet } from "react-router";
import {CustomLink} from "./CustomLink"

export const Layout = () => {
  const setActive = ({isActive})=>{isActive ? "active-link": ""}
  return (
    <>
      <header>
        <CustomLink to="/"  >home</CustomLink>
        <CustomLink to="/posts" >posts</CustomLink>
        <CustomLink to="/about"  >about</CustomLink>
      </header>

      <Outlet />

      <footer>footer</footer>
    </>
  );
};
