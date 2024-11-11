import { useEffect, useState } from "react"
import Heading from "../heading"

export default function Footer() {
    const [footer, setFooter] = useState([])

    const footerData = async () => {
        const footerItem = await fetch("/api/footers")
        const finalData = await footerItem.json()
        setFooter(finalData.footers)
    }

    useEffect(() => {
        footerData()
    }, [])
    console.log("Footer------------",footer)
    return (
        <>
            <div className="footer">
                {footer.map((item) => {
                    return <div className="footer-items">
                        <Heading level={3} text={item.title}/>
                        {item.content.map((item) => {
                            return <p>{item.subtitle}</p>
                        })}
                    </div>
                })}
            </div>
        </>
    )
}