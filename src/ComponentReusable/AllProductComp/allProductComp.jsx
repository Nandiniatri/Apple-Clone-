import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import HeaderFile from "../../Home/Header/header";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Image } from "antd";
import './allProductComp.css'
import FooterFile from "../../Home/Footer/footer";
import Modal from "../Modal/modal";
import GalleryPOPUpData from "../../GalleryPopUpData/galleryPopUpData";




const AllProductComponentFile = () => {
    const { productName } = useParams();
    console.log(productName);

    const [allProductData, setAllProductData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selected, setSelected] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/${productName}`);
            const result = await response.json();
            setAllProductData(result[productName]);
        };
        fetchData();
    }, [productName]);

    const handleGallerySlide = (item) => {
        console.log(item);
        setIsModalOpen(true);
        setSelected(item)
    }

    return (
        <div style={{ marginTop: '50px' }}>
            <HeaderFile />
            <nav className="nav">
                <div className="wrapper">
                    <ul className="nav-items">
                        {allProductData.map((items) => {
                            return items.nav.map((nav) => (
                                <li className="nav-item" id={nav.id} key={nav.id}>
                                    <a href="" className="nav-link">
                                        <img src={nav.url} height="54px" alt={nav.title} />
                                        <span className="label">{nav.title}</span>
                                        {/* <UseNavBar url={nav.url} title={nav.title} height='54px' /> */}
                                    </a>
                                </li>
                            ));
                        })}
                    </ul>
                </div>
            </nav>

            {/* ribbon data */}
            {allProductData.map((ribbonItm) => (
                <div>
                    {ribbonItm.ribbon.map((itm) => (
                        <div className="ribbon">
                            <div className="ribbon-wrapper">
                                <div className="ribbon-content-wrapper">
                                    <p className="ribbon-p">
                                        {itm.subTitle}
                                        <a href="#">Check out now<MdKeyboardArrowRight /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            {/* welcome */}
            {allProductData && allProductData.map((macVideo) => (
                <div key={macVideo.id}>
                    {macVideo.welcome && macVideo.welcome.map((wel) => (
                        <div key={wel.id}>
                            {wel.first && wel.first.map((firstItem) => (
                                <div className="welcome-content" key={firstItem.id}>
                                    <div className="welcome-header">
                                        <h1>{firstItem.title}</h1>
                                        <p>{firstItem.subTitle}</p>
                                    </div>
                                </div>
                            ))}

                            {wel.second && wel.second.map((secondItem) => (
                                <div className="welcome-main-container">
                                    <div className="welcome-video" key={secondItem.id}>
                                        {secondItem.type === 'video' ? (
                                            <video controls autoPlay loop>
                                                <source src={secondItem.url} type="video/mp4" />
                                            </video>
                                        ) : secondItem.type === 'img' ? (
                                            <div className="allProduct-welcome-img-div">
                                                <img src={secondItem.url} />
                                                <h2>{secondItem.title}</h2>
                                                <p>{secondItem.subTitle}</p>
                                            </div>
                                        ) : ''}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}

            {/* gallery */}

            {allProductData.map((galleyItm) => (
                galleyItm.gallery.map((glryItm) => (
                    <div key={glryItm.id}>
                        {glryItm.first.map((firstItm) => (
                            <div className="gallery-outer-inner-div" key={firstItm.id}>
                                <h1>{firstItm.title}</h1>
                            </div>
                        ))}


                        <div className="gallery-main-outer-div">
                            <div className="gallery-Main-Container">
                                {glryItm.second.map((item) => (
                                    // console.log(item)
                                    <div>
                                        <div key={item.id} className="gallery-inner">
                                            {item.type === 'gridScroll' && (
                                                // <div onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
                                                <div onClick={() => handleGallerySlide(item)} style={{ cursor: 'pointer' }}>
                                                    <div>
                                                        <Image src={item.url} preview={false} className="img" />
                                                        <h3 style={{ color: item.color }}>{item.subTitle}</h3>
                                                    </div>
                                                    <div className="text-container">
                                                        <h1 style={{ color: item.color }}>{item.title}</h1>
                                                        <h1 style={{ color: item.color }}>{item.title1}</h1>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                           




                    </div>
                    // console.log()

                ))
            ))}


            {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                
            </Modal> */}



            {/* banner */}
{/* 
            {allProductData.map((item) => (
                item.banner.map((bannerItm) => (
                    <div>
                        {bannerItm.first.map((fstItm) => (
                            <div className="banner-heading">
                                <h2 className="banner-h2">
                                    <p style={{ color: fstItm.color }}>{fstItm.title}</p>
                                </h2>
                            </div>
                        ))}

                        {bannerItm.second.map((secItm) => (
                            <div className="banner-content">
                                <div className="banner-content-wrapper">
                                    <div className="head">
                                        <div className="banner-content-heading">
                                            <h2 className="headline">
                                                <p style={{ color: secItm.color }}>{secItm.title}</p>
                                                <p style={{ color: secItm.color }}>{secItm.subTitle}</p>
                                            </h2>
                                        </div>
                                        <div className="banner-btn-a">
                                            <button style={{ backgroundColor: secItm.backgroundColor }}><a href="">
                                                {secItm.btn}
                                            </a></button>
                                        </div>
                                    </div>
                                    <div className="banner-image">
                                        <img src={secItm.url} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            ))} */}

            {/* essential */}
            {allProductData.map((item) => (
                item.essentials.map((essentialsItm) => (
                    <div className="esential-main-container">
                        {essentialsItm.first.map((fstItm) => (
                            <div className="esential-title-div">
                                <h1>{fstItm.title}</h1>
                            </div>
                        ))}

                        <div className="esential-container">
                            {essentialsItm.second.map((secItm) => (
                                <div className="essential-items">
                                    <h3>{secItm.title}</h3>
                                    <p>{secItm.subTitle}</p>
                                    <a href={secItm.link}>{secItm.link}</a>
                                    <div>
                                        <img src={secItm.url} />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                ))
            ))}
            <FooterFile />
        </div>
    );
};

export default AllProductComponentFile;





{/* {allProductData.map((galleyItm) => (
                galleyItm.gallery.map((glryItm) => (
                    <div key={glryItm.id}>
                        {glryItm.first.map((firstItm) => (
                            <div className="gallery-outer-inner-div" key={firstItm.id}>
                                <h1>{firstItm.title}</h1>
                            </div>
                        ))}

                        <div className="gallery-main-outer-div">
                            <div className="gallery-Main-Container">
                                {glryItm.second.map((item) => (
                                    <div className="gallery-inner" key={item.id}>
                                        {item.type === 'gridScroll' ? (
                                            <>
                                                <div>
                                                    <Image src={item.url} preview={false} className="img" />
                                                    <h3 style={{ color: item.color }}>{item.subTitle}</h3>
                                                </div>
                                                <div className="text-container">
                                                    <h1 style={{ color: item.color }}>{item.title}</h1>
                                                    <h1 style={{ color: item.color }}>{item.title1}</h1>
                                                </div>
                                            </>
                                        ) : item.type === 'gridImg' ? (
                                            // <div>
                                            //     <img src={item.url} alt={item.title} className="img" />
                                            //     <h3 style={{ color: item.color }}>{item.subTitle}</h3>
                                            // </div>
                                            // <div><TvHomeGrid /></div>
                                            <div>
                                                <img src={item.url} />
                                            </div>
                                        ) : ''}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            ))} */}


{/* <div className="gallary-img-container-div">
                                {glryItm.second.map((item) => (
                                    <div key={item.id} className="gallary-img-inner-container">
                                        {item.type === 'gridImg' && (
                                            <div className="gallary-img-container">
                                                <img src={item.url} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div> */}




                        //     <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        //     {selected && selected.popUp && selected.popUp.map((popUp) =>{
                        //         return (
                        //             <div>
                        //                 <div>
                        //                     <h3>{popUp.subTitle}</h3>
                        //                     <h1>{popUp.name}</h1>
                        //                 </div>
                        //                 <div>
                        //                     {popUp && popUp.titles.map((titleItm) =>{
                        //                         console.log(titleItm);
                        //                         return (
                        //                             <>
                        //                                 <p>{titleItm.title}</p>
                        //                                 <img src={titleItm.url} />
                        //                             </>
                        //                         )
                        //                     })}
                                            
                        //                 </div>
                        //             </div>
                        //         )
                        //     })}
                        // </Modal>