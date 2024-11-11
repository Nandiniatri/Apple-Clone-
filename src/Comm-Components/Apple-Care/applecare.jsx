import { useEffect, useState } from "react"
import Heading from "../heading"
import Image from "../image"

export default function AppleCare(){
        const[care,setCare] = useState([]);

        const careData = async() => {
            const careFetch = await fetch("/api/appleCares")
            const finalFetch = await careFetch.json()
            console.log(finalFetch)
            setCare(finalFetch.appleCares)
        }

        useEffect(() => {
            careData()
        },[])
   

            return(
                <>
                <div className="careAll-Items">
                    {care.map((item) => {
                        return <div className="care-container" key={item.id}>
                            <div className="careItem-Conatiner">
                            <Heading text={item.title} level={1} />
                            <p>{item.para}</p>
                            <a href={item.link}>{item.linkSub}</a>
                            <div>
                            <Image src={item.url}/>
                                </div> 
                            </div>
                        </div>
                    })}
                </div>
                </>
            )
}