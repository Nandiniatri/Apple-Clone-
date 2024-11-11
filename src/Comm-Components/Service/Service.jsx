import Heading from "../heading";

export default function AppleService() {
    return (
        <div className="service-main-container">
            <div className="servicve-compenets">
                <Heading text={"Apple Service Programmes"} level={2} />
                <div>
                    <a href="#">Apple Watch Series 6 Service Programme for Blank Screen Issue</a>
                </div>
                <div>
                    <a href="#">iPhone 12 and iPhone 12 Pro Service Programme for No Sound Issues</a>
                </div>
                <div>
                    <a href="#">15-inch MacBook Pro Battery Recall Programme</a>
                </div>
                <div>
                    <a href="#">Apple Three-Prong AC Wall Plug Adapter Recall Programme</a>
                </div>
                <div>
                    <a href="#">See all programmes</a>
                </div> 
            </div>
        </div>
    )
}