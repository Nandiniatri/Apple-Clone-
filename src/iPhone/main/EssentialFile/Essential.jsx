import { useState,useEffect } from "react"
import './Essential.css'

export default function Essential(){
    const [essentialData,setEssentialData] =useState([])

    const fetchEssential = async () => {
        const essentialData = await fetch("/api/iPhoneessentials")
        const finalesentialData = await essentialData .json()
        setEssentialData(finalesentialData.iPhoneessentials)
    }
    console.log(essentialData.iPhoneessentials)

    useEffect(() => {
       fetchEssential()
    }, [])

        return(
            <div className="esential-main-container">
                <div className="esential-title-div">
                    <h1>iPhone essentials.</h1>
                </div>
                <div className="esential-container">
                    {essentialData.map((item) => {
                        return <div className="essential-items">
                            <h3>{item.title}</h3>
                            <p>{item.para}</p>
                            <a href={item.link}>{item.linkSub}</a>
                            <div>
                                <img src= {item.url}/>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        )
}