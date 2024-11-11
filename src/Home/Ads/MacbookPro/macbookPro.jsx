import './macbookPro.css';

const MacBookPro = () => {
    return (
        <div className="iPhone16-Container">
            <div className="iPhone16-top-div">
                <h1 className="headLine">MacBook Pro</h1>
                <p className="subHead">A Work Smart</p>
            </div>

            <div>
                <img src="https://www.apple.com/v/home/bu/images/heroes/macbook-pro-enhanced/hero_macbookpro_announce__f7vm5bnswsae_medium_2x.jpg" />
            </div>

            <div className="iPhone16-callout">
                <p className="callout-available">Available starting 9.20</p>
                <p className="callout-ai">
                    Apple Intelligence coming this fall
                    <sup>2</sup>
                </p>
            </div>

            <div className="macbookPro-button">
                <button className="macbookpro-btn1">Learn more</button>
                <button className="macbookpro-btn2">Pre-order</button>
            </div>
            <div className='macbookPro-bottom'>
                <h4>Built for Apple Intelligence</h4>
                <p>Available now in US English</p>
            </div>
        </div>
    );
}

export default MacBookPro;
