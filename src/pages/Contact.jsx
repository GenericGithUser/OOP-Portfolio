import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6"
import { MdEmail } from "react-icons/md";

function Contact(){
    return(
        <>
        <div className="main">
            <div className="header w-[98vw] max-[500px]:h-screen h-[85vh] m-auto bg-[url('./assets/bg.jpg')] bg-center bg-cover rounded-3xl border-brown1-cus border-4 overflow-hidden">
                <div className="actHeader w-full h-full backdrop-blur-[3px] flex items-center justify-center flex-col">
                    <div className="card w-[60vw] bg-brown1-cus/75 p-2 rounded-3xl max-[500px]:w-[85vw]">
                        <h1 className="text-5xl font-bold text-center ">Contact</h1>
                        <div className="imgCont rounded-full border-2 border-green4-cus overflow-clip w-40 h-40 m-auto">
                            <img src="/images/me.png" className="w-60 h-40 m-auto"/>
                        </div>
                        <h2 className="text-4xl text-center text-green3-cus">Gianmarlo Adrian S. Abril</h2>
                        <h2 className="text-3xl text-center text-green4-cus">Socials</h2>
                        <div className="socialLinks flex gap-3 justify-center">
                            <a href="https://www.facebook.com/khoramshahr.13/" target="_blank" rel="noopener noreferrer" className="hover:bg-amber-200 hover:border-2 border-amber-300 rounded-xl transition-all duration-100 ease-in-out"><FaFacebookSquare size={50} color="#005F02"/></a>
                            <a href="https://github.com/GenericGithUser" target="_blank" rel="noopener noreferrer" className="hover:bg-amber-200 hover:border-2 border-amber-300 rounded-xl transition-all duration-100 ease-in-out"><FaGithubSquare size={50} color="#005F02"/></a>
                            <a href="https://www.linkedin.com/in/gian-abril-466914323" target="_blank" rel="noopener noreferrer" className="hover:bg-amber-200 hover:border-2 border-amber-300 rounded-xl transition-all duration-100 ease-in-out"><FaLinkedin size={50} color="#005F02"/></a>
                            <a href="mailto:abril.gian.as@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:bg-amber-200 hover:border-2 border-amber-300 rounded-xl transition-all duration-100 ease-in-out"><MdEmail size={50} color="#005F02"/></a>
                        </div>
                        <h2 className="text-3xl text-center text-green4-cus mt-2">Contact Number</h2>
                        <div className="contactNumber flex justify-center">
                           <div className="con flex gap-2">
                             <FaPhone size={40} color="#005F02"/> 
                             <p className="text-3xl">0956 220 9603</p>
                           </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact