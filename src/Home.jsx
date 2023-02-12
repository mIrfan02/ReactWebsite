import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../src/images/home.svg";
import Common from "./Common";
const Home=()=>{
    return(
        <>
        <Common  btn="Get Started" imgsrc={img1} visit="/service"/>
        </>
    )
}
export default Home;