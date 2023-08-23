import {useState} from "react";
import {FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa";
    

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
            <nav className="flex items-center justify-between flex-wrap p-3">
                <div className="flex items-center flex-shrink-0 text- mr-6">
                    <span className="font-semibold text-xl tracking-tight">EA</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-black hover:text-white hover:border-white" onClick={toggleNav}>
                        <svg className="fill-current h-3 w-3" ><title>Menu</title></svg>
                    </button>
                </div>
                    <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isNavOpen ? "block" : "hidden"}`}>
                        <div className="text-sm lg:flex-grow">
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:font-semibold mr-4">
                                Home
                            </a>
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:font-semibold mr-4">
                                Skills
                            </a>
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:font-semibold">
                                Projects
                            </a>

                        </div>
                    
                        <a href="https://github.com/edusebass" target="blank" className="mx-1 inline-block text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:bg-white mt-4 lg:mt-0 ">
                            <FaGithub className=" text-4xl"/>                        
                        </a>
                        <a href="https://www.linkedin.com/in/eduardo-almachi-727730238/" target="blank" className={`mx-1 inline-block text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:bg-white mt-4 lg:mt-0`}>
                            <FaLinkedin className=" text-4xl"/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=593986572316" target="blank" className={`mx-1 inline-block text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:bg-white mt-4 lg:mt-0`}>
                            <FaWhatsapp className=" text-4xl"/>
                        </a>
                    
                    
                </div>
            </nav>
        
    );
};

export default Header