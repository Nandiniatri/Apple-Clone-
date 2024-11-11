import { useEffect, useState } from "react"
import './footer.css'

function FooterFile() {
    const [footer, setFooter] = useState([])

    const footerData = async () => {
        const footerItem = await fetch("/api/footers")
        const finalData = await footerItem.json()
        setFooter(finalData.footers)
    }

    useEffect(() => {
        footerData()
    }, [])
 
    return (
        <>
            <div className="footer">
                {footer.map((item) => {
                    return <div className="footer-items" key={item.id}>
                        <h3>{item.title}</h3> 
                        {item.content.map((item) => {
                            return <p>{item.subtitle}</p>
                        })}
                    </div>
                })}
            </div>
        </>
    )
}

export default FooterFile;