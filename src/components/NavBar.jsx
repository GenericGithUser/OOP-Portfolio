import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    };

    
    return(
        <>
        <div className="navBar bg-brown1-cus p-2.5 m-2 rounded-3xl flex justify-between items-center sticky top-0 z-10 max-[700px]:hidden">
            <h1 className="text-3xl font-black text-green3-cus">Gian's OOP Portfolio</h1>
            <div className="links flex gap-10 items-center text-2xl bg-green5-cus p-1 rounded-2xl ">
                <NavLink className={({isActive})=> `text-green4-cus hover:bg-amber-200 p-0.5 rounded-2xl transition-all duration-75 ${isActive ? 'bg-amber-500 p-0.5': ''} ` }  to="/">Home</NavLink>
                <NavLink className={({isActive})=> `text-green4-cus hover:bg-amber-200 p-0.5 rounded-2xl transition-all duration-75 ${isActive ? 'bg-amber-500 p-0.5': ''}` } to="/midterms">Midterms</NavLink>
                <NavLink className={({isActive})=> `text-green4-cus hover:bg-amber-200 p-0.5 rounded-2xl transition-all duration-75 ${isActive ? 'bg-amber-500 p-0.5': ''}` } to="/finals">Finals</NavLink>
                <NavLink className={({isActive})=> `text-green4-cus hover:bg-amber-200 p-0.5 rounded-2xl transition-all duration-75 ${isActive ? 'bg-amber-500 p-0.5': ''}` } to="/contact">Contact</NavLink>
            </div>
        </div>
        <div className="navBar bg-brown1-cus p-2.5 m-2 rounded-3xl flex justify-between items-center sticky top-0 z-10 min-[700px]:hidden">
            <h1 className="text-3xl font-black text-green3-cus">Gian's OOP Portfolio</h1>
            <CiMenuBurger size={40} onClick={toggleMenu} className={
               `transition-all duration-100 ease-in-out ${isOpen ? 'rotate-90': 'rotate-0'}` 
            }/>
            
        </div>
        <div className={`flex flex-col links gap-10 items-center text-2xl justify-center bg-green5-cus/90 p-1 rounded-2xl absolute z-20 transition-all duration-200 ease-in-out overflow-hidden w-0 h-screen ${
            isOpen ? ' w-max opacity-100' : ' opacity-0 left-10'
            }`}>
                <NavLink onClick={()=> setIsOpen(false)} className={({isActive})=> `text-green4-cus hover:bg-amber-200 p-0.5 rounded-2xl transition-all duration-75 ${isActive ? 'bg-amber-500 p-0.5': ''} ` }  to="/">Home</NavLink>
                <NavLink onClick={()=> setIsOpen(false)} className={({isActive})=> `text-green4-cus hover:bg-amber-200 p-0.5 rounded-2xl transition-all duration-75 ${isActive ? 'bg-amber-500 p-0.5': ''}` } to="/midterms">Midterms</NavLink>
                <NavLink onClick={()=> setIsOpen(false)} className={({isActive})=> `text-green4-cus hover:bg-amber-200 p-0.5 rounded-2xl transition-all duration-75 ${isActive ? 'bg-amber-500 p-0.5': ''}` } to="/finals">Finals</NavLink>
                <NavLink onClick={()=> setIsOpen(false)} className={({isActive})=> `text-green4-cus hover:bg-amber-200 p-0.5 rounded-2xl transition-all duration-75 ${isActive ? 'bg-amber-500 p-0.5': ''}` } to="/contact">Contact</NavLink>
            </div>
        
        </>
    );
}

export default NavBar