import { CiSearch } from "react-icons/ci";
import Input from "../input";

export default function Search(){
    return(
        <>
        <div className="search-Conatiner">
        <CiSearch className="searchItem" />
        <Input placeholder={"Search Support"} className={"search-support"}/>
        </div>
        </>
    )
}