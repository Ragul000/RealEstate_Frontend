import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './ProductDetail.css'
const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/listings/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => setError("Failed to load product details."));
    }, [id]);

    if (error) return <div>{error}</div>;
    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <h1 className="heading">{product.ptype} - {product.nrooms}</h1>
            <img src={product.iurl} alt="Product" className="product-detail-img" />
            <div className="details">
                <p>Location: {product.plocation}</p>
                <p className="product-owner">Seller: {product.Owner}</p>
                <p className="product-pricing">
                    Price: <span>{product.opricing}</span>
                    <span><span></span><del>{product.strikepricing}</del></span>
                </p>

            </div>
            <div className="product-desc">
                {product.pdesc}
            </div>

            <a href="https://priyaelango285.itch.io/realestate-webgl2" target="_blank" rel="noopener noreferrer">
                <button className="tour-button">Start Virtual Tour</button>
            </a>

        </div>
    );
};

export default ProductDetails;
