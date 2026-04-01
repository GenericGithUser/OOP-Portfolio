function CodeRender({ content }){
    return(
        <>
           <pre className="border-4 border-green3-cus rounded-2xl overflow-auto bg-gray-500 text-white w-[77vw] m-auto h-[70vh] max-[500px]:w-[85vw]">
                {content}
           </pre>
        </>
    )
}

export default CodeRender