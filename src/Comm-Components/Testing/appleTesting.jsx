import { useEffect, useState } from "react"
import Image from "../image"
import Heading from "../heading"

export default function AppleTesting(){
    const [testing,setTesting] =useState([])
    const fetchTesting = async() => {
        const testingData = await fetch("/api/testLists")
        const finalTesting  = await testingData.json()
        setTesting(finalTesting.testLists)
    }
    console.log(testing.testLists)

    useEffect(() => {
        fetchTesting()
    },[])

    return(
        <>
        <div className="testing-conatiner" >
            {testing.map((item) => {
                return <div className="testing-item" key={item.id}>
                    <Image src={item.url} />
                    {/* <Heading level={4} text={item.title} className='testing-item-h4'/> */}
                    <p>{item.title}</p>
                </div>
            })}
        </div>
        </>
    )
}