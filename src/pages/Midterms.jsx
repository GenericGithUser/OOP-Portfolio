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
                <h1 className="text-7xl font-bold text-center max-[500px]:text-[2.6rem]">Midterm Compilation</h1>
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
                            <CodeActItem name={act.name} source={act.source} score={act.score} screenshots={act.screnshots} info={act.info} labels={act.labels} ></CodeActItem>
                        ))} 
                    </div>
            </div>
            <div className="midtermAct mt-5 m-auto bg-brown1-cus rounded-3xl p-2 w-[96vw]" id="mExam">
                    <h2 className="text-5xl font-bold text-center mb-2">Midterm Exam</h2>
                    <img src="/images/placeholder.jpg" className="w-[20vw] rounded-full border-8 border-green-950 mb-5 m-auto max-[800px]:w-[40vw] max-[500px]:w-[70vw]" />
                    <div className="textArea m-auto w-[80vw] rounded-3xl bg-green1-cus p-4">
                        <p className="font-extrabold">Exams still hasn't been returned meaning there is still no scores, so reflection:</p>
                        <p>The Exams was somewhat easy, even the fill in the blanks part, the bitwise part though was kinda hard as I have forgotten to review it again.</p>
                        <p>Aside from that It was somewhat easy, though easiness is kinda off putting, considering its a 100 point exam, but I guess we'll see if the easiness is really something.</p>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Midterms