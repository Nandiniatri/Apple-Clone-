import './header.css'
import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const HeaderFile = () => {
    const headerStyleIcon = { fontSize: '18px', color: '#333336' }

    return (
        <>
            <header className='Mainheader'>
                <nav>
                    <ul>
                        <li> 
                            <Link to={"/"}><a href="#"><FaApple style={headerStyleIcon} /></a></Link>
                        </li>
                        {/* <li><a href="#">Store</a></li> */}
                        <li>
                            <Link to={"/product/macs"}><a href="#">Mac</a></Link>
                        </li>
                        <li>
                            <Link to={"/product/iPads"}><a href="#">iPad</a></Link>
                        </li>
                        <li>
                            <Link to={"/product/iphones"}><a href="#">iPhone</a></Link>
                        </li>
                        <li>
                            <Link to={"/product/watches"}><a href="#">Watch</a></Link>
                        </li>
                        {/* <li><a href="#">Vision</a></li> */}
                        <li>
                            <Link to={"/product/airpods"}><a href="#">AirPods</a></Link>
                        </li>
                        {/* <li>
                            <Link to={"/product/tvhomes"}><a href="#">TV & Home</a></Link>
                        </li> */}
                        <li>
                            <Link to={"/accessories"}><a href="#">Accessories</a></Link>
                        </li>

                        <li>
                            <Link to={"/Support"}><a href="#">Support</a></Link>
                        </li>
                        <li><a href="#"><IoSearchOutline style={headerStyleIcon} /></a></li>
                        <li><a href="#"><IoBagOutline style={headerStyleIcon} /></a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default HeaderFile;