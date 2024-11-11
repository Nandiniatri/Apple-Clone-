import Heading from "../../Comm-Components/heading";
import './accessories.css'
import { IoIosArrowDown } from "react-icons/io";
export default function Accessories() {
    return (
        <>
            <div className="accessories">
                <div className="accessories-header">
                <div className="access-level">
                    <Heading level={2} text={"Accessories"}/>
                    <p className="browse-all">Browse all </p>
                </div>
                </div>
            </div>
        </>
    )
} 