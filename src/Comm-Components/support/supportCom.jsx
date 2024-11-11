import HeaderFile from "../../Home/Header/header";
import AppleCare from "../Apple-Care/applecare";
import AppleSupport from "../appleSupport/appleSupport";
import Footer from "../Footer/footer";
import Heading from "../heading";
import Image from "../image";
import Search from "../Search/search";
import AppleService from "../Service/Service";
import SubSupport from "../SubSupport/subSupport";
import SupportLists from "../supportList";
import AppleTesting from "../Testing/appleTesting";
import "./support.css"

export default function Support() { 
    return (
        <>
        <HeaderFile />
            <div className="support">
                <div className="Support-banner">
                    <Image src={"https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_heros/hero-banner-homepage.image.large_2x.jpg"} className={"banner-img"} />
                </div>
                <div className="applesuport-Container">
                    <Heading level={1} text={"Apple Support"} className={"appleSupport-heading"} />
                </div>
                <SupportLists />
                <AppleTesting />
                <div className="applesuport-Container">                 
                    <Heading level={2} text={"Search for more topics"} className={"appleSearch-heading"} />
                </div> 
                <div className="searchtab-conatiner">
                    <Search />     
                </div>
                <div className="apple-support">
                    <AppleSupport />
                </div>
                <div className="apple-subsupport">
                    <SubSupport />
                </div>  
                <div className="care-components">
                    <AppleCare />
                </div>
                <div className="service-container">
                    <AppleService />
                </div>
                <div className="footer-Container">
                    <Footer />
                </div>
            </div>
        </>
    )
}