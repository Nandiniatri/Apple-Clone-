import { useEffect } from "react"
import { useState } from "react"
import Image from "./image"

export default function SupportLists(){
    const [data,setData] =useState([])

    const fetchSupportData = async() => {
        const itemData = await fetch('/api/ItemLists')
        const finalData = await itemData.json()
        console.log(finalData)
        setData(finalData.itemLists)
    }
    useEffect(() => {
        fetchSupportData()
    },[])
    console.log(data)

        return(
            <>
            <div className="support-items">
                {data.map((item) => {
                    return <div key={item.id}>
                            <div className="support-inner-div">
                                <Image src={item.url}/>
                                <p className="item-title"><a href={item.href}>{item.title}</a></p>
                            </div>
                            
                    </div>
                })}
                </div>
            </>
        )
}