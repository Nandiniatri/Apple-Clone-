import React from "react";
import "./welcomsec.css";

const WelcomeSectionComp = () => {
    return (
        <div className="welcome-main-container">
            <div className="welcome-content">
                <div className="welcome-header">
                    <div><h1>iPhone</h1></div>
                    <div><p>Designed to be loved</p></div>
                </div>
            </div>
            <div className="welcome-video">
                <video controls autoPlay loop>
                    <source src="https://apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/small_2x.mp4#t=6.695677.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    ); 
};

export default WelcomeSectionComp;
