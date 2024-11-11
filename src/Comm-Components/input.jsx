export default function Input({value,placeholder,type,className}){
    return(
        <>
        <input type={type} placeholder={placeholder} value={value} className={className}/>
        </>
    )
}