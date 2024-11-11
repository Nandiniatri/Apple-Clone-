import { useEffect, useState } from "react"
import Heading from "../heading"
import Image from "../image"
import { MdArrowOutward } from "react-icons/md";

export default function AppleSupport() {
    const [support, setSupport] = useState([])
    const fetchSupport = async () => {
        const supportData = await fetch("/api/supports")
        const finalSupport = await supportData.json()
        setSupport(finalSupport.supports)
    }
    console.log(support.supports) 

    useEffect(() => {
        fetchSupport()
    }, [])
 
    return (
        <div>
            {support.map((item) => {
                return <div className="appleSupport-Conatiner" key={item.id}>
                    <div className="setSupport-item">
                    <Heading text={item.title} level={1} className={"appleSupport-head"}/>
                    <p>{item.para}</p>
                    <a href={item.link}>{item.linkSub}<MdArrowOutward /></a>
                    <div>
                        <Image src={item.url} />
                    </div>
                        </div>
                </div>
            })}
        </div>
    )
}