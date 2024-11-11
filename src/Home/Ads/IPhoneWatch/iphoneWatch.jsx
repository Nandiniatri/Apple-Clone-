import './iphoneWatch.css'


const IPhoneWatch = () =>{
    return (
        <div className='iphoneWatch-Container'>
            <div className='iphoneWatch-div1'>
                <img src="https://www.apple.com/v/home/br/images/logos/apple-watch-series-10/hero_logo_apple_watch_series_10__dla4dkv1wfue_medium_2x.png" />
            </div>

            <div className='iphoneWatch-div2'>
                <p className='iphoneWatch-subhead'>Thinstant classic.</p>
                <p className='iphoneWatch-callout'>Available starting 9.20</p>
            </div>

            <div className="iphoneWatch-button-div">
                <button className="iPhoneWatch-btn1">Learn more</button>
                <button className="iPhoneWatch-btn2">Pre-order</button>
            </div>
            
            <div className='iphoneWatch-div3'>
                <img src="https://www.apple.com/v/home/br/images/heroes/apple-watch-series-10/hero_apple_watch_series_10_announce_lte__erybd9d98zau_medium_2x.jpg" />
            </div>
            
        </div>
    )
}
export default IPhoneWatch;