import { useEffect, useState } from "react";
import './HomeGrid.css'

const HomeGrid = () =>{
    const [homeGrid , setHomeGrid] = useState([]);


    useEffect(() => {
        fetch('/api/gridPhotos')
        .then(response => response.json())
        .then((data) => setHomeGrid(data.gridPhotos));
        }, []);

    return (
        <div className="homegrid-container">
            {homeGrid.map((data) =>{
                return (
                    <div key={data.id} className="homegrid-inner-div">

                        <div className="inner-div1">
                            <img src={data.url} />
                        </div>

                        <div className="inner-div2">
                            <h2 style={{color:data.color}}>{data.headLine}</h2>
                            <p style={{color:data.color}}>{data.subhead}</p>
                        </div>

                        <div className="inner-div3">
                            <p style={{color:data.color}}>{data.callout}</p>
                        </div>

                        <div className="inner-div4">
                            <button className='in-div4-btn1'>{data.btn[0]}</button>
                            <button className='in-div4-btn2'>{data.btn[1]}</button>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default HomeGrid;