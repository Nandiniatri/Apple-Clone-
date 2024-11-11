export default function UseNavBar({url,title ,height}){
    return(
        <>
        <img src={url} height={height}/>
        <span>{title}</span>
        </>
    )
}