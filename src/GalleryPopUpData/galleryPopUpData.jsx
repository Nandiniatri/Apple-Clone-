import { Image } from "antd";

const galleryPoPUpData = [
    { 
        id:1,
        title:'Familiar as iPhone. You’ll feel right at home on Mac, with many of the same apps as iPhone — like Messages, Photos, Notes, and FaceTime.',
        url:'https://apple.com/v/mac/home/ca/images/overview/consider/boc_ease_01__fubebwkx80q6_large.jpg'
    },
    {
        id:2,
        title:'Fully loaded. Get started with apps you’ll use every day, like Mail, Calendar, and Safari for surfing the web. And if you want to create documents, spreadsheets, or presentations, there are powerful built-in productivity apps like Pages, Numbers, and Keynote.',
        url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_ease_02__5a1r49adu0y6_large.jpg'
    },
    {
        id:3,
        title:'Simple setup. Migration Assistant makes it easy to transfer your data — including documents, photos, settings, and user accounts — from your previous Mac or PC.',
        url:'https://www.apple.com/v/mac/home/ca/images/overview/consider/boc_ease_03__dknq8zpxcogi_large.jpg'
    }
]

const GalleryPOPUpData = () =>{

    return (
        <>
            {galleryPoPUpData.map((item) =>{
                return (
                    <>
                        <h1>{item.title}</h1>
                        <Image src={item.url} />
                    </>
                )
            })}
        </>
    )
}

export default GalleryPOPUpData;