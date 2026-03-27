import ActItem from "../components/ActItem"
import CodeActItem from "../components/CodeActItem.jsx"
import quizData from "../assets/quizData.js"
import swData from "../assets/swData.js"
import actData from "../assets/actData.js"

function Midterms(){
    return(
        <>
        <div className="main">
            <div className="mainBody m-auto bg-brown1-cus rounded-3xl p-2 w-[96vw]" >
                <h1 className="text-7xl font-bold text-center max-[400px]:text-[2.6rem]">Midterm Compilation</h1>
                <p className="text-center text-2xl mt-5 w-[90vw] m-auto">
                    This Consists of All Quizzes, Seatwork, Activities and Exam during Our Midterms.
                </p>
                <div className="text-center text-2xl mt-5 w-[90vw] m-auto bg-green1-cus rounded-3xl">
                    <ul className="flex gap-5 justify-center max-[500px]:flex-col">
                        <li><a href="#mQuiz" className="font-bold transition-all duration-200 ease-in-out underline hover:bg-amber-300 rounded-xl">Quiz</a></li>
                        <li><a href="#mSw" className="font-bold transition-all duration-200 ease-in-out underline hover:bg-amber-300 rounded-xl">Seatworks</a></li>
                        <li><a href="#mAct" className="font-bold transition-all duration-200 ease-in-out underline hover:bg-amber-300 rounded-xl">Activities</a></li>
                        <li><a href="#mExam"className="font-bold transition-all duration-200 ease-in-out underline hover:bg-amber-300 rounded-xl">Exam</a></li>
                    </ul>
                </div>
            </div>
            <div className="midtermQuiz mt-5 m-auto bg-brown1-cus rounded-3xl p-2 w-[96vw]" id="mQuiz">
                    <h2 className="text-5xl font-bold text-center mb-2">Midterm Quizzes</h2>
                    <div className="quizCont grid grid-cols-2 w-full justify-center gap-3 max-[500px]:grid-cols-1">
                        {quizData.map((quiz)=>(
                            <ActItem name={quiz.qName} img={quiz.img} info={quiz.info} score={quiz.score} question={quiz.questions} answer={quiz.answers}></ActItem>
                        ))} 
                    </div>
            </div>
            <div className="midtermSw mt-5 m-auto bg-brown1-cus rounded-3xl p-2 w-[96vw]" id="mSw">
                    <h2 className="text-5xl font-bold text-center mb-2">Midterm Seatworks</h2>
                    <div className="quizCont grid grid-cols-2 w-full justify-center gap-3 max-[500px]:grid-cols-1">
                        {swData.map((sw)=>(
                            <ActItem name={sw.qName} img={sw.img} info={sw.info} score={sw.score} question={sw.questions} answer={sw.answers}></ActItem>
                        ))} 
                    </div>
            </div>
            <div className="midtermAct mt-5 m-auto bg-brown1-cus rounded-3xl p-2 w-[96vw]" id="mAct">
                    <h2 className="text-5xl font-bold text-center mb-2">Midterm Activities</h2>
                    <div className="quizCont flex flex-col w-full items-center gap-3 ">
                        {actData.map((act)=>(
                            <CodeActItem name={act.name} source={act.source} score={act.score} screenshots={act.screnshots} info={act.info}></CodeActItem>
                        ))} 
                    </div>
            </div>
            <div className="midtermAct mt-5 m-auto bg-brown1-cus rounded-3xl p-2 w-[96vw]" id="mExam">
                    <h2 className="text-5xl font-bold text-center mb-2">Midterm Exam</h2>

                    <h2 className="text-4xl font-bold text-center mb-2">Placeholder for Exam</h2>
                    <img src="/images/placeholder.jpg" className="w-[50vw] m-auto" />
            </div>
        </div>
        </>
    )
}

export default Midterms