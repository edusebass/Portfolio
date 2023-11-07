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

    useEffect(() => {
        const handleScroll = () => {
            // Verificar la posición de desplazamiento para decidir si el menú debe estar abierto o cerrado
            if (window.scrollY > 100) {
            setIsNavOpen(false); // Cierra el menú si el usuario ha desplazado más de 100 píxeles
            }
        };

        // Agregar un event listener para el evento de desplazamiento
        window.addEventListener("scroll", handleScroll);

        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`flex justify-between flex-wrap shadow-2xl p-3 text-white sm:fixed sm:p-4 sm:w-full ${scrolling ? "  bg-slate-950  text-black transition delay-150 duration-300 ease-in-out" : ""}`}>
            <div className="fixed top-0 left-0 w-full bg-slate-950 p-4 z-50 flex items-center justify-between sm:hidden">
                <span className="font-semibold tracking-tight text-4xl text-white">EA</span>
                <button className="flex px-6 py-4 border rounded text-white border-white" onClick={toggleNav}>
                    <svg className="fill-current h-4 w-3">{isNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</svg>
                </button>
                {isNavOpen && (
                    <div className=" fixed top-20 left-0 w-full bg-slate-950 p-4 z-50 flex flex-col items-center justify-center">
                        <a href="#intro" className="text-white text-lg mb-4 hover:underline uppercase">Inicio</a>
                        <a href="#skills" className="text-white text-lg mb-4 hover:underline uppercase">Habilidades</a>
                        <a href="#projects" className="text-white text-lg mb-4 hover:underline uppercase">Proyectos</a>
                        <a href="#aboutme" className="text-white text-lg mb-4 hover:underline uppercase">Sobre mi</a>
                        <a href="#footer" className="text-white text-lg hover:underline uppercase">Contacto</a>
                    </div>
                )}
            </div>

            {/* COMPUTADORAS */}
            <div className="hidden items-center flex-shrink-0 text- mr-6 sm:flex">
                <span className="font-semibold tracking-tight pl-10 text-4xl">EA</span>
            </div>
            <div className={`hidden sm:flex-grow sm:flex sm:items-center sm:w-auto`}>
                <div className="text-sm sm:flex-grow">
                    <a href="#intro" className=" block mt-4 sm:inline-block sm:mt-0 text-black-300 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case" >
                        Inicio
                    </a>
                    <a href="#skills" className=" block mt-4 sm:inline-block sm:mt-0 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
                        Habilidades
                    </a>
                    <a href="#projects" className=" block mt-4 sm:inline-block sm:mt-0 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
                        Proyectos
                    </a>
                    <a href="#aboutme" className=" block mt-4 sm:inline-block sm:mt-0 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
                        Sobre mi
                    </a>
                    <a href="#footer" className=" block mt-4 sm:inline-block sm:mt-0 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
                        Contacto
                    </a>
                </div>
                <div>
                    <a
                            href="https://mail.google.com/mail/?view=cm&to=edu03sebas@gmail.com"
                            target="_blank"
                            type="button"
                            className="mx-1 hidden text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:text-red-400 hover:bg-white mt-4 sm:mt-0 sm:inline-block sm:ease-in duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                    fillRule="evenodd"
                                    clipRule="evenodd" />
                            </svg>
                        </a>
                    <a href="https://github.com/edusebass" target="blank" className="mx-1 hidden text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:text-black hover:bg-white mt-4 sm:mt-0 sm:inline-block sm:ease-in duration-300">
                        <FaGithub className=" text-2xl"/>                        
                    </a>
                    <a href="https://www.linkedin.com/in/eduardo-almachi-727730238/" target="blank" className={`mx-1 text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent  hover:text-blue-800 hover:bg-white mt-4 sm:mt-0 hidden sm:inline-block sm:sm:ease-in duration-300`}>
                        <FaLinkedin className=" text-2xl"/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=593986572316" target="blank" className={`mx-1 text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:text-green-600 hover:bg-white mt-4 sm:mt-0 hidden sm:inline-block sm:sm:ease-in duration-300`}>
                        <FaWhatsapp className=" text-2xl"/>
                    </a> 
                </div>
            </div>
        </nav>
    );
};

export default Header