import './browser.css'
import { useEffect, useState } from 'react'
// import useFetchUrl from '../../FetchData/fetchUrl';

export default function Browser() {
    const [browserProduct, setBrowserProducts] = useState([])
    const [activeItem, setActiveItem] = useState(null);
    
    // const {data,setData} = useFetchUrl({url:"/api/browserProducts"})
    // console.log(data.browserProducts)

    const ProductsData = async () => {
        const ProductsFetch = await fetch("/api/browserProducts")
        const finalProducts = await ProductsFetch.json()
        console.log(finalProducts)
        setBrowserProducts(finalProducts.browserProducts)
    }

    const productsCategory = async () => {
        const ProductsFetch = await fetch("/api/browserCategories")
        const finalProducts = await ProductsFetch.json()
        console.log(finalProducts)
        setBrowserProducts(finalProducts.browserCategories)
        console.log(browserProduct)
    }

    function onHanldeCategory() {
        productsCategory()
        setActiveItem('category');
    }

    function onHanldeProduct(){
        ProductsData()
        setActiveItem('product');
    }

    useEffect(() => {
        ProductsData()
        setActiveItem('product');
    }, [])

    return (
        <>
            <div className="browser-accessories">
                <div className="brower-container">
                    <div  className={`browser-items ${activeItem === 'product' ? 'active' : ''}`} onClick={onHanldeProduct}>
                        Browse by Product
                    </div>
                    <div className={`browser-items ${activeItem === 'category' ? 'active' : ''}`} onClick={onHanldeCategory}>
                        Browse by Category
                    </div>
                </div>
            </div>
            <div className='upper-line'></div>
            <div className='browser-Products'>
                {browserProduct.map((item) => {
                    return <div className='browser-list'>
                        <div className='product-circle'>
                            <img src={item.url} />
                        </div>
                        <p>{item.title}</p>
                    </div>
                })}

            </div>
            <div className='down-line'></div>
        </>
    )
}