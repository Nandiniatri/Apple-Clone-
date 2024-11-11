import { useEffect, useState } from "react";
import Heading from "../heading";
import Image from "../image";

export default function SubSupport() {
    const [subsupport, setSubSupport] = useState([]);

    const fetchSupport = async () => {
        const SubsupportData = await fetch("/api/supportPros");
        const finalSubSupport = await SubsupportData.json();
        setSubSupport(finalSubSupport.supportPros);
    };

    useEffect(() => {
        fetchSupport();
    }, []);

    return (
        <>
            {subsupport.map((item) => (
                <div className="appleSubSupport-Conatiner" key={item.id}>
                    <div className="subSupport-align">
                        <Heading text={item.title} level={1} />
                        <p>{item.para}</p>
                        <button><a href={item.link}>{item.linkSub}</a></button>
                        <div className="sub-supportImg">
                            <Image src={item.url} style={{height:item.height}} className={"subSupport-img"} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
