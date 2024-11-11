
import React from "react";
import './ribbon.css'
import { MdKeyboardArrowRight } from "react-icons/md";

const Ribbon = () =>{

    return (
        <>
            <div className="ribbon">
                <div className="ribbon-wrapper">
                    <div className="ribbon-content-wrapper">
                        <p className="ribbon-p">Pre-order iPhone 16 and iPhone 16 Pro today. Already have an iPhone saved for pre-order?<a href="#">Check out now<MdKeyboardArrowRight /></a></p>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default Ribbon;