import { BiFontSize } from 'react-icons/bi';
import './homeContent.css'
import { SlArrowRight } from "react-icons/sl";

const HomeContent = () =>{
    const homeContentIcon = {color:'#0071e3' , fontSize:'10px'}

    return (
        <>
            <div className='homeContent-Container'>
                <span>Now through 9/30, get a gift card up to $150 when you buy Mac or iPad with education savings.</span>
                <sup>
                    <a href="#">1</a>
                </sup>
                <a href="#">Shop</a>
                <span><SlArrowRight style={homeContentIcon}/></span>
            </div>
        </>
    )
}

export default HomeContent;