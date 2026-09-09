import { useState } from "react";
import  Header  from "./components/header"
import Home from "./pages/home";
import Footer from "./components/footer";
import './App.css'

export default function App(){
    return(
        <>
        <Header />
        <Home />
        <Footer />
        </>
    )
}