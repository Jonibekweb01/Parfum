import React from "react";
import { Link } from "react-router-dom";
import HeaderHome from "../components/HeaderHome";
import "../styles/responsive.css";
import MainHome from "../components/MainHome";
import FooterHome from "../components/FooterHome";
import "../styles/global.css";
import "../styles/responsive.css";
export default function Home() {
  return (
    <>
      <HeaderHome />
      <MainHome />
      <FooterHome/>
    </>
  );
}
