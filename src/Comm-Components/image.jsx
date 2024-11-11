export default function Image({ src,style ,className }) {
    return (
        <>
            <img src={src} className={className}  style={style} />
        </>
    )
}