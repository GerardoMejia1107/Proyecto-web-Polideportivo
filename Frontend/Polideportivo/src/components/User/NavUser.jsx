import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";



const NavUser = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900"> 
            <ul className="text-center text-xl p-20 ">

                <Link spy={true} smooth ={true} to = "Home" >
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                </Link>
                <Link spy={true} smooth ={true} to = "Trainings">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Entrenamientos</li>
                </Link>
                <Link spy={true} smooth ={true} to = "History">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Historial</li>
                </Link>
                <Link spy={true} smooth ={true} to = "">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Portal estudiantil</li>
                </Link>  
                </ul>
        </div>
    </>
    return (
        <nav>
            <div className= "h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
                <div className= "flex items-center flex-1">
                    <span className="text-3xl font-bold ">Logo</span>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth ={true} to = "Home" >
                                <li className="hover:text-gray-950 transition border-b-2 border-[#003366] hover:border-gray-950 cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth ={true} to = "Trainings">
                                <li className="hover:text-gray-950 transition border-b-2 border-[#003366] hover:border-gray-950 cursor-pointer">Entrenamientos</li>
                            </Link>
                            <Link spy={true} smooth ={true}to = "History">
                                <li className="hover:text-gray-950 transition border-b-2 border-[#003366] hover:border-gray-950 cursor-pointer">Historial</li>
                            </Link>
                            <Link spy={true} smooth ={true}to = "">
                                <li className="hover:text-gray-950 transition border-b-2 border-[#003366] hover:border-gray-950 cursor-pointer">Portal estudiantil</li>
                            </Link>  
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden trasntion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>



            </div>
        </nav>
    );

};

export default NavUser;
