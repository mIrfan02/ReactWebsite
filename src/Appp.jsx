import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./tr.css";




import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import { Routes ,Route,redirect} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Switch from "react-bootstrap-v5/lib/esm/Switch";

const Appp=()=>{
return(
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/service" element={<Service/>} />
    <Route  path='*'  element={<Home />}/>
    </Routes>
    <Footer/>
    </>
)


}

export default Appp;