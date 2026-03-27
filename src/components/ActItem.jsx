
function ActItem( {name,img,info,score,question,answer} ){

    return(
        <>
            <div className="box bg-green1-cus p-2 rounded-2xl flex-col border-green4-cus border-5 overflow-auto">
                <div className="divTitle"><h2 className="title text-center text-2xl font-bold">{name}<span className="text-xl font-bold"> | Score: {score}</span></h2></div>
                <div className="contentBox flex gap-3 flex-wrap">
                    <img src={img} alt="missing" className="w-70 border-3 border-amber-200 rounded-3xl"/>
                    <div className="questionNAnswer">
                        <h2 className="font-bold text-xl">Questions and Answers</h2>
                        <table className="table-auto">
                            <tbody>
                                {question.map((q, index) => (
                                    <tr key={index}>
                                        <td className="p-1">{q}</td> 
                                        <td className="p-1">{answer[index]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                <div className="infoBox">
                        <h2 className="font-bold text-xl">Explanation</h2>
                        <p className="text-l  h-30">{info}</p>
                    </div>
            </div>
        </>
    )
}

export default ActItem