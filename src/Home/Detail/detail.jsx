import { useState , useEffect } from "react";
import './detail.css'

const Details = () =>{

    const [homeDetail , setHomeDetail] = useState([]);


    useEffect(() => {
        fetch('/api/details')
        .then(response => response.json())
        .then((data) => setHomeDetail(data.details));
        }, []);

    return (
        <div className="detail-Container">
            {homeDetail.map((item) =>{
                return(
                    <ul key={item.id} className="detail-inner">
                        <li>{item.title}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Details;