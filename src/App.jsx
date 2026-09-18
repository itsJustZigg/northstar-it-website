import { useState } from "react";
import  Header  from "./components/header"
import Home from "./pages/home";
import Footer from "./components/footer";
import './App.css'
import { Outlet, useLocation } from "react-router-dom";

export default function App(){
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}