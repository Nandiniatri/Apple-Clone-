
import React from "react";
import { useState, useEffect } from "react";
import "./navbar.css";
import HeaderFile from "../../Home/Header/header";

const Navbar = () => { 
    const [appleData, setAppleData] = useState([]);

    useEffect(() => {
        getAppleData();
    }, [])

    const getAppleData = () => {
        fetch("/api/apple")
            .then((res) => {
                return (
                    res.json()
                );
            })
            .then((data) => setAppleData(data.phones))
            .catch((err) => console.log(err))
    }

    return (
        <>
        <HeaderFile />
            <nav className="nav">
                <div className="wrapper">
                    <ul className="nav-items"> 
                        {
                            appleData && appleData.map((item, index) => (
                                <li className="nav-item" id={item.id} key={index}>
                                    <a href="" className="nav-link">
                                        <img src={item.img} height="54px" />
                                        <span className="label">{item.title}</span> 
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;