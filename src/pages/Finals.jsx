
function Finals(){
    return(
        <>
            <div className="main">
                <div className="mainBody m-auto bg-brown1-cus rounded-3xl p-2 w-[96vw]" >
                <h1 className="text-7xl font-bold text-center max-[400px]:text-[2.6rem]">Finals Compilation</h1>
                <p className="text-center text-2xl mt-5 w-[90vw] m-auto">
                    This Consists of All Quizzes, Seatwork, Activities and Exam during Our Finals.
                </p>
                
                {/* <div className="text-center text-2xl mt-5 w-[90vw] m-auto bg-green1-cus rounded-3xl">
                    <ul className="flex gap-5 justify-center max-[500px]:flex-col">
                        <li><a href="#mQuiz" className="font-bold transition-all duration-200 ease-in-out underline hover:bg-amber-300 rounded-xl">Quiz</a></li>
                        <li><a href="#mSw" className="font-bold transition-all duration-200 ease-in-out underline hover:bg-amber-300 rounded-xl">Seatworks</a></li>
                        <li><a href="#mAct" className="font-bold transition-all duration-200 ease-in-out underline hover:bg-amber-300 rounded-xl">Activities</a></li>
                        <li><a href="#mExam"className="font-bold transition-all duration-200 ease-in-out underline hover:bg-amber-300 rounded-xl">Exam</a></li>
                    </ul>
                </div> */}
                </div>
                <div className="construction mt-4">
                    <div className="header w-[95vw] h-[85vh] m-auto bg-[url('/public/images/construct.jpg')] bg-center rounded-3xl border-brown1-cus border-4 overflow-hidden">
                            <div className="actHeader w-full h-full backdrop-blur-[3px] flex items-center justify-center flex-col">
                                <div className="headerLabel text-center z-1 flex flex-col ">
                                    <p className="text-[6rem] font-black max-[500px]:text-[4rem]">🚧WORK IN PROGRESS🚧</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Finals