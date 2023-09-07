import {useEffect } from "react";

import {useState} from "react";
import {FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 100) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[])

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
            <nav className={`flex justify-between flex-wrap shadow-lg p-3 text-white sm:fixed sm:p-4 sm:w-full ${scrolling ? "  bg-slate-950  text-black transition delay-150 duration-300 ease-in-out" : ""}`}>
                <div className="flex items-center flex-shrink-0 text- mr-6">
                    <span className="font-semibold tracking-tight pl-10 text-4xl">EA</span>
                </div>
                <div className="block sm:hidden">
                    <button className="flex items-center px-6 py-4 border rounded border-black hover:text-white hover:border-white" onClick={toggleNav}>
                        <svg className="fill-current h-3 w-3" > {isNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</svg>
                    </button>
                </div>
                <div className={`w-full flex-grow justify-between sm:flex sm:items-center sm:w-auto ${isNavOpen ? "block" : "hidden"}`}>
                    <div className="text-sm sm:flex-grow">
                        <a href="#intro" className=" block mt-4 sm:inline-block sm:mt-0 text-black-300 hover:font-semibold hover:underline  mr-14 uppercase sm:normal-case" >
                            Home
                        </a>
                        <a href="#skills" className=" block mt-4 sm:inline-block sm:mt-0 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
                            Skills
                        </a>
                        <a href="#projects" className=" block mt-4 sm:inline-block sm:mt-0 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
                            Projects
                        </a>
                        <a href="#aboutme" className=" block mt-4 sm:inline-block sm:mt-0 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
                            About me
                        </a>
                        <a href="#footer" className=" block mt-4 sm:inline-block sm:mt-0 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
                            Contact
                        </a>
                    </div>
                
                    <a href="https://github.com/edusebass" target="blank" className="mx-1 hidden text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:bg-white mt-4 sm:mt-0 sm:inline-block sm:ease-in duration-300">
                        <FaGithub className=" text-2xl"/>                        
                    </a>
                    <a href="https://www.linkedin.com/in/eduardo-almachi-727730238/" target="blank" className={`mx-1 text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:bg-white mt-4 sm:mt-0 hidden sm:inline-block sm:sm:ease-in duration-300`}>
                        <FaLinkedin className=" text-2xl"/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=593986572316" target="blank" className={`mx-1 text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:bg-white mt-4 sm:mt-0 hidden sm:inline-block sm:sm:ease-in duration-300`}>
                        <FaWhatsapp className=" text-2xl"/>
                    </a> 
                </div>
            </nav>
        
    );
};

export default Header