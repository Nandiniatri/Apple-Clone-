import Search from "../../Comm-Components/Search/search";
import HeaderFile from "../../Home/Header/header";
import Accessories from "../accessories/accessories";
import MixMatch from "../Mix. Match. MagSafe/mixmatch";
import SearchCom from "../Search/search";
import Browser from "../Browse by Product/Browse";
import Footer from "../../Comm-Components/Footer/footer";
export default function AccessoriesCom(){
    return(
        <>
        <div>
            <HeaderFile />
            <Accessories />
            <MixMatch />
            <SearchCom />
            <Browser />
            <Footer />
        </div>
        </>
    )
}