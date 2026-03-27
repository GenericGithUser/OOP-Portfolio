import CodeRender from "./CodeRender"
import { useEffect, useState } from "react"

function CodeActItem({ name, source, score, screenshots, info }){
    const [content, setContent] = useState("");

    useEffect(()=>{
        fetch(source)
        .then((res)=> res.text())
        .then((data)=> setContent(data))
        .catch((e)=> console.log(e))
    }, [])

    return(
        <>
           <div className="codeBox bg-green1-cus p-2 rounded-2xl flex-col border-green4-cus border-5 overflow-auto w-[80vw] justify-items-center">
             <h1 className="title font-bold text-2xl text-center">{name} | Score: {score}</h1>
             <div className="actCodeStuff flex flex-col justify-center items-center">
                <CodeRender content={content}></CodeRender>
                <h1 className="title font-bold text-2xl text-center">Screenshots:</h1>
                <div className="screenShotBox mb-5">
                    <img src={screenshots} alt="missing" className="w-[30vw] border-3 border-amber-200 rounded-3xl"/>
                    {/* {screenshots.map(x)=>(
                    <img src={x} alt="missing" />
                    )} */}
                </div>
                <div className="infoBox border-t-4 border-green4-cus">
                    <h2 className="font-bold text-xl">Explanation</h2>
                    <p className="text-l  h-30">{info}</p>
                </div>
             </div>
           </div>
        </>
    )
}

export default CodeActItem