import Heading from "../../Comm-Components/heading"
import Search from "../../Comm-Components/Search/search"
import './search.css'
export default function SearchCom() {
    return (
        <>
            <div className="search-access">
                <Heading level={2} text={"Find the accessories you’re looking for."} />
                <div className="find-accessories">
                <Search />
                </div>
            </div>
        </>
    )
} 