import './iphone16.css';

const IPhone16666 = () => {
    return (
        <div className="iPhone16-Container">
            <div className="iPhone16-top-div">
                <h1 className="headLine">iPhone 16 </h1>
                <p className="subHead">Hello, Apple Intelligence.</p>
            </div>

            <div>
                <img src="https://www.apple.com/v/home/br/images/heroes/iphone-16/hero_iphone16_preorder__djo0elxwjbma_large_2x.jpg" />
            </div>

            <div className="iPhone16-callout">
                <p className="callout-available">Available starting 9.20</p>
                <p className="callout-ai">
                    Apple Intelligence coming this fall
                    <sup>2</sup>
                </p>
            </div>

            <div className="callout-button">
                <button className="iPhone16-btn1">Learn more</button>
                <button className="iPhone16-btn2">Pre-order</button>
            </div>
        </div>
    );
}

export default IPhone16666;
