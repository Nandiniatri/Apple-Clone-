
import React, { useState, useEffect } from "react";
import "./selectSec.css"

const SelectSectionComp = () => {
    const [selectData, setSelectData] = useState([]);

    useEffect(() => {
        getSelectData();
    }, [])

    const getSelectData = () => {
        fetch("/api/selectPhones")
            .then((res) => {
                return (
                    res.json()
                );
            })
            .then((data) => setSelectData(data.selectPhones))
            .catch((err) => console.log(err))
    }

    return (
        <>
            <div className="select-content">
                <header className="select-header">
                    <h1>Explore the line-up.</h1>
                    <p>Compare all models</p>
                </header>
            </div>
            <div className="select-galleries">
                <div className="item-container">
                    <ul className="product-list-set">
                        {
                            selectData && selectData.map((item, index) => (<li className="product-title" id={item.id}>
                                <div className="product-title-header">
                                    {/* product image */}
                                    <div className="product-image">
                                        <img src={item.img} />
                                    </div>
                                    {/* product color */}
                                    <div className="product-image-color">
                                        <ul className="image-container">
                                            {
                                                item.color.map((color, index) => {
                                                    return (
                                                        <li>
                                                            <div style={{ backgroundColor: color, width: "10px", height: "10px", borderRadius: "50%" }}></div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    {/* prodct name */}
                                    <div className="product-name">
                                        <h3>
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                                {/* product description */}
                                <div className="product-description">
                                    <p>{item.description}</p>
                                </div>
                                {/* product price */}
                                <div className="product-price">
                                    <h5>{item.price}</h5>
                                </div>
                                {/* button */}
                                <div className="productBtn">
                                    <a href="" className="learnBtn">Learn more</a>
                                    <a href="" className="orderBtn">Pre-order</a>
                                </div>
                                {/* product description */}

                                <div className="product_description_container">
                                    <div className="intelligence">
                                        {
                                            item && item.specification.map((item, index) => (
                                                <div className="intelligence-container">
                                                    <div className="intelligence_icon">
                                                        <img src={item.icon} />
                                                    </div>
                                                    <div className="intelligence_title">
                                                        <p>{item.title}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className="intelligence_title"></div>
                                    </div>
                                </div>
                            </li>
                            )
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SelectSectionComp;