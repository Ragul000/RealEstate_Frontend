import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './About.css'

import Slider from "react-slick"
import { render } from "react-dom";
class About extends Component {
    render(){
        const setting = {
            dots: true,
            infinite : true,
            slidesToShow:3,
            slidesToScroll:1,
            autoplay:true,
            speed:2000,
            autoplaySpeed:2000,
            cssEase: "linear"
        };

    return(
        <>
        <div className="mainContainer">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <h2>Our Clients</h2>
            <Slider {...setting}>
                <div className="container">
                    <img src = "logo1.webp"/>
                </div>
                <div className="container">
                    <img src = "logo2.webp"/>
                </div>
                <div className="container">
                    <img src = "logo5.jpg"/>
                </div>
                <div className="container">
                    <img src = "logo6.webp"/>
                </div>
                <div className="container">
                    <img src = "logo6.png"/>
                </div>
                <div className="container">
                    <img src = "logo7.jpg"/>
                </div>
                <div className="container">
                    <img src = "logo8.png"/>
                </div>
            </Slider>
        </div>
        <div id="awards">
    <div class="container">
        <h1 class="sub-title">Our Services</h1>
        <div class="awards-list">
            <div>
                
                <h2>Buy Residential Appartment</h2>
                <p>Ready to harvest the fruits of your investment? Sell your land fast and fair.</p>
                <a href = "#">Learn more</a>
            </div>
            <div>
                
                <h2>Leasing Commercial properties</h2>
                <p>Unlock the income potential of your land. Find the perfect tenant with our expertise..</p>
                <a href = "#" >Learn more</a>
            </div>
            <div>
                
                <h2>Buy Plots/Lands</h2>
                <p>Plant the seeds of your future prosperity. Find the perfect plot to cultivate your dreams.From vacant plots to thriving investments, we help you discover your ideal land.</p>
                <a href = "#" >Learn more</a>
            </div>

        </div>
    </div>
</div>
    
        </>
    )
}
}
export default About