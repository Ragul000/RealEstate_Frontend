import React from "react";
import './Products.css'
import axios from "axios";
import { useState, useEffect } from "react";
const Products = (props) =>{
    <div className="product-card">
       <img src={props.iurl} className="product-img"/>
       <div className="product-title">{props.ptype}</div>
       <div className="product-desc">{props.plocation}</div>
       <div>
        <span className="price">{props.opricing}</span>
        <span className="strike-price"><del>{props.strikepricing}</del></span>
       </div>
    </div>
}
export default Products