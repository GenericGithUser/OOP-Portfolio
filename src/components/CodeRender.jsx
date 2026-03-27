function CodeRender({ content }){
    return(
        <>
           <pre className="border-4 border-green3-cus rounded-2xl overflow-auto bg-gray-500 text-white w-[75vw] h-[70vh]">
                {content}
           </pre>
        </>
    )
}

export default CodeRender