import { useState, useEffect } from "react";
import './GetToKnownIPhone.css';
import { Image } from "antd";



const GetToKnownI = () => {
    const [gallery, setGallery] = useState([]);
 
    useEffect(() => {
        fetch('/api/iPhoneGalleryGetToKnows')
            .then(response => response.json())
            .then((data) => setGallery(data.iPhoneGalleryGetToKnows));
    }, []);

    return (
        <div className="gallery-main-outer-div">
            <div className="gallery-outer-inner-div">
                <h1>Get to know iPhone.</h1>
            </div>
            <div className="gallery-Main-Container">
                {gallery.map((item) => (
                    <div className="gallery-inner" key={item.id}>
                        <div>
                            <Image src={item.url} preview={false} className="img"/>
                            <h3 style={{ color: item.color}} >{item.subTitle}</h3>
                        </div>
                        <div className="text-container">
                            <h1 style={{ color: item.color }}>{item.title}</h1>
                            <h1 style={{ color: item.color }}>{item.title1}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    );
}

export default GetToKnownI;



// import GetToKnownGalleryComp from "../../../ComponentReusable/GetToKnowGalleryComponent/getToKnowGallery";


// const GetToKnownI = () => {

//     return (
//         <>
//             <GetToKnownGalleryComp fetchUrl={'/api/iPhoneGalleryGetToKnows'} title={'Get to know iPhone.'}/>
//         </>
//     )
// }

// export default GetToKnownI;





