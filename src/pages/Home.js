import React from "react";
import { Link } from "react-router-dom";
import HeaderHome from "../components/HeaderHome";
import "../styles/responsive.css";
import MainHome from "../components/MainHome";
import FooterHome from "../components/FooterHome";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <MainHome />
      <FooterHome/>
    </>
  );
}
