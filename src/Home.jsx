import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Listings from "./Listings";
import About from "./About";
import './Listings.css'
const Home = () => {
    const products = [{
        img: "img2.jpg",
        title: "Vivo V27 Pro 5G",
        desc: "V27 is equipped with a vivo standard charger which supports a charging power of up to 66W",
        price: "$300",
        strikePrice: "$400"
    }, {
        img: "img1.jpg",
        title: "Xiaomi Note 12 Pro",
        desc: "V27 is equipped with a vivo standard charger which supports a charging power of up to 66W",
        price: "$450",
        strikePrice: "$500"
    }, {
        img: "img3.png",
        title: "Oppo Reno Pro 5G",
        desc: "V27 is equipped with a vivo standard charger which supports a charging power of up to 66W",
        price: "$400",
        strikePrice: "$500"
    }]
    return (
        <>
            <div>
                <div className="home">
                    <div className="home-container container grid">
                        <div className="home-data">
                            <h1 className="home-title">
                                Discover <br />Most Suitable Property
                            </h1>
                            <p className="home-description">
                                Here land dreams bloom into reality!!
                            </p>
                            <form action="" className="home-search">
                                <FontAwesomeIcon icon={faLocationDot} className="home-search-icon" />
                                <input type="search" placeholder="Search by location..." className="home-search-input"></input>
                                <button className="search-btn">Search</button>
                            </form>
                            <div className="home-value">
                                <div>
                                    <h1 className="home-value-number">9K<span>+</span></h1>
                                    <span className="home-value-description">Premium <br />Product</span>
                                </div>
                                <div>
                                    <h1 className="home-value-number">2K<span>+</span></h1>
                                    <span className="home-value-description">Happy<br />Customer</span>
                                </div>
                                <div>
                                    <h1 className="home-value-number">28K<span>+</span></h1>
                                    <span className="home-value-description">Awards<br />Winning</span>
                                </div>
                            </div>
                        </div>
                        <div className="home-images">
                            <div className="home-orbe">

                            </div>
                            <div className="home-img">
                                <img src="home.jpg" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            
            <Listings />
            
        </>
    )
}

export default Home