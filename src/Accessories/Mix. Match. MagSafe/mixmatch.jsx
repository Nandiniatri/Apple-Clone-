import Heading from "../../Comm-Components/heading";
import Image from "../../Comm-Components/image";
import Search from "../../Comm-Components/Search/search";
import './mixmatch.css'
export default function MixMatch() {
    return (
        <>
            <div className="mix-match">
                <div className="mix-matchleft">
                    <div>
                        <div className="mix-matchleft-inner">
                            <h1>Mix. Match.</h1>
                            <h1 className="inner-h1-part2"> MagSafe</h1>
                        </div>
                        <p>Snap on a case, wallet or wireless charger.</p>
                        <a href="#">Shop MagSafe</a>
                    </div>
                </div>
                <div className="mix-imageright">
                    <Image src={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/aalp-magsafe-header-07-202409?wid=2880&hei=960&fmt=png-alpha&.v=1723153194901"} />
                </div>
            </div>
        </>
    )
}  