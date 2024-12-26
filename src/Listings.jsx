import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Listings.css';

const Listings = () => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/listings')
            .then(response => {
                setProducts(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="product-list">
            {Products.map((product) => (
                <div className="product-card" key={product._id}>
                    <Link to={`/products/${product._id}`} className="product-link">
                        <img src={product.iurl} alt="Product" className="product-img" />
                        <div className="product-title">{product.ptype}, {product.nrooms}</div>
                        <div className="product-desc1">{product.plocation}, Seller: {product.Owner}</div>
                        <div>
                            <span className="price">{product.opricing}</span>
                            <span className="strike-price"><del>{product.strikepricing}</del></span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Listings;
