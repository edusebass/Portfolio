import {useState} from "react";
import giticon from "../../public/img/github.png"
import linkeicon from "../../public/svg/linkendin.svg"

    

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Eduardo Almachi</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={toggleNav}>
                        <svg className="fill-current h-3 w-3" ><title>Menu</title></svg>
                    </button>
                </div>
                    <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isNavOpen ? "block" : "hidden"}`}>
                        <div className="text-sm lg:flex-grow">
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Home
                            </a>
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Skills
                            </a>
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                                Projects
                            </a>

                        </div>
                    <div className="px-5">
                        <a href="#" className="inline-block text-sm px-2 py-2 leading-none border rounded-full border-white hover:border-transparent hover:bg-white mt-4 lg:mt-0">
                            <img src={giticon} alt="github: edusebass" className="h-10"/>
                        </a>
                        <a href="#" className="inline-block text-sm px-2 py-2 leading-none border rounded-full border-white hover:border-transparent hover:bg-white mt-4 lg:mt-0">
                            <img src={linkeicon} alt="github: edusebass" className="h-10"/>
                        </a>
                    </div>
                </div>
            </nav>
        
    );
};

export default Header
