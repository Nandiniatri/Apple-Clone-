import React from "react";
import "./banner.css";

const Banner = () => {
    return ( 
        <>
            <div className="bannerContainer">
                <div className="banner-heading">
                    <h2>
                        Take a closer look at
                        <br />
                        our latest models.
                    </h2>
                </div> 
                <div className="banner-content">
                    <div className="banner-content-wrapper">
                        <div className="head">
                            <div className="banner-content-heading">
                                <h2 className="headline">
                                    <p>A Guided Tour of</p>
                                    <p className="headline-p1">iPhone 16 & iPhone 16 Pro</p>
                                </h2>
                            </div>
                            <div className="banner-btn-a">
                                <button><a href="">
                                    Watch the film
                                </a></button>
                            </div>
                        </div>
                        <div className="banner-image">
                            <img src="https://www.apple.com/v/iphone/home/bw/images/overview/banner/guided_tour__dna6wcz8ieie_large_2x.jpg" alt="iPhone 16" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Banner;
