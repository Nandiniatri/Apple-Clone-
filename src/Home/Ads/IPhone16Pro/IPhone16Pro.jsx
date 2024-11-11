import './IPhone16Pro.css';

const IPhone16Pro = () => {
    return (
        <div className="iPhone16Pro-Container">
            <div className="iPhone16Pro-top-div">
                <h1 className="headLine">iPhone 16 Pro</h1>
                <p className="subHead">Hello, Apple Intelligence.</p>
            </div>

            <div>
                <img src="https://www.apple.com/v/home/br/images/heroes/iphone-16-pro/hero_iphone16pro_preorder__bw14fpo72niu_large_2x.jpg" />
            </div>

            <div className="callout">
                <p className="callout-available">Available starting 9.20</p>
                <p className="callout-ai">
                    Apple Intelligence coming this fall
                    <sup>2</sup>
                </p>
            </div>

            <div className="callout-button">
                <button className="iPhone16pro-btn1">Learn more</button>
                <button className="iPhone16pro-btn2">Pre-order</button>
            </div>
        </div>
    );
}

export default IPhone16Pro;
