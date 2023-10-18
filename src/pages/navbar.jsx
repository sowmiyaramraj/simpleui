import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart,WhatsappLogo } from "phosphor-react";
import "./pages.css";
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="div1" style={{width:"90%"}}>
            <Link className="link">Home</Link> 
            <Link className="link">Order</Link> 
            <Link className="link">Food</Link> 
            <Link className="link">Restaurant</Link> 
            <Link className="link">Testimonials</Link> 
            <Link className="link">Contact Us</Link> 
            </div>
            <div className="div2" style={{width:"10%"}}>
            <Link className="logo" > <WhatsappLogo/></Link>
            <Link className="logo" > <ShoppingCart/></Link>
            </div>
        </div>
    );
}