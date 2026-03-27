
function Home(){
    return(
        <>
        <div className="main">
            <div className="header w-[98vw] h-[85vh] m-auto bg-[url('./assets/bg.jpg')] bg-center bg-cover rounded-3xl border-brown1-cus border-4 overflow-hidden">
                <div className="actHeader w-full h-full backdrop-blur-[3px] flex items-center  flex-col">
                    <img src="/images/me.png" className="w-150 h-130  absolute z-0 bottom-0.5 max-[800px]:w-250 max-[800px]:h-200 max-[500px]:h-120 max-[500px]:w-300"/>
                    <div className="headerLabel text-center z-1 mt-auto flex flex-col -space-y-17 max-[500px]:-space-y-10 max-[500px]:mb-10">
                        <p className="text-[10rem] font-black text-amber-200 max-[500px]:text-[6rem]">GIAN</p>
                        <p className="text-[8rem] font-black text-green1-cus leading-none max-[500px]:text-[4.5rem]">OOP <span className="max-[400px]:text-[3.5rem]">PORTFOLIO</span></p>
                    </div>
                </div>
            </div>
            <div className="body bg-brown1-cus w-[98vw] m-auto p-2 mt-3 rounded-3xl">
                <div className="topText text-center">
                    <h1 className="text-7xl font-bold">Hello!</h1>
                    <h2 className="text-6xl wrap-normal max-[400px]:text-5xl">I am <span className="text-green3-cus font-bold">Gianmarlo Adrian S. Abril</span></h2>
                    <h2 className="text-5xl wrap-normal max-[400px]:text-4xl">My Course is: <span className="text-green3-cus font-bold">Object Oriented Programming</span></h2>
                    <h2 className="text-5xl wrap-normal max-[400px]:text-4xl">School / Section: <span className="text-green3-cus font-bold">Polytechnic University of the Philippines/ BSIT 2-1N</span></h2>
                </div>
                <p className="text-center text-2xl mt-5 w-[90vw] m-auto">
                    This e-portfolio presents my Midterm Project in Object-Oriented Programming using React. It
                    includes quizzes, activities, and exams that demonstrate my understanding of OOP concepts.
                </p>
            </div>
        </div>
        
        </>
    )
}

export default Home