import React,{useContext} from "react"
import "./pages.css";
import Img1 from "../images/img1.jpg";
import {Product} from "./product";
import Navbar from "./navbar";

export default function Shop(){
    return(
        <div className="shop">

            <div className="body">

                <div className="headerimg" style={{backgroundImage: `url(${Img1})`, backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                <p className="headerCard">
                <span className="headerDescriptionHeading">LOREM IPSUM</span><br/>
                <span className="headerDescriptionContent">
                Lorem Ipsum has been the industry's standard dummy
                text <br/>ever since the 1500s, when an unknown printer took<br/>
                a galley of type and scrambled it to make a type<br/>
                specimen book.
                </span>
                </p>
                </div>

            <p className="text1">Order Now</p>
            
            <div style={{display:"flex",flexDirection:"row"}}>
            {Product.map((product)=>( 
            <div key={product.productId} style={{width:"50%",padding:"30px"}}>
                
             
             <p className="card" >
                 <span>
                 <img className="cardproductimg" src={product.productImage}/>
                 <span className="productname">{product.productNmae}</span>
                 <span className="productDescription">{product.productDescription}</span>
             
                 </span>
                </p>
          </div>
             ))}
        </div>

            <button className="order">Order</button>
            <div style={{with:"100%",height:"100px"}}></div>
            </div>
            
        </div>
    );
}