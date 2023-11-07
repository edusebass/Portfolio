import {BiLogoPython, BiLogoCPlusPlus, BiLogoHtml5, BiTerminal, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoJquery,
    BiSolidFileJson, BiLogoMongodb, BiDirections, BiLogoTypescript} from "react-icons/bi";
import {FaJava} from "react-icons/fa";
import {BsGit} from "react-icons/bs";
import {SiJupyter, SiMysql, SiMicrosoftsqlserver, SiApachecouchdb, SiExpress} from "react-icons/si";
import { AiOutlinePercentage } from "react-icons/ai";
import '../../public/img/codigo.jpg'

const skills = () => {
    return (
        <>
            <div className="flex justify-center p-3" id="skills"> 
                <div className="text-white text-6xl sm:text-8xl">
                    <h2 className="text-yellow-400 font-extrabold text-center pb-8 text-5xl mt-16 my-3 ">Habilidades && Herramientas</h2>
                    <div className="flex flex-wrap grow justify-center p-0 sm:h-screen sm:p-10 ">
                        <div className=" text-blue-300 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                            <BiLogoPython/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">Python</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-sky-700">
                            <BiLogoCPlusPlus/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">C++</p>        
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                            <FaJava/> 
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Java</p>       
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-orange-600">
                            <BiLogoHtml5/>    
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">HTML</p>    
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-blue-600">
                            <BiLogoCss3/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">CSS</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 flex flex-col items-center text-yellow-500">
                            <BiLogoJavascript className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 "/> 
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-white">JavaScript</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-amber-700">
                            <BsGit/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">Git</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 flex flex-col items-center">
                            <BiTerminal className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 "/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Terminal</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 flex flex-col items-center">
                            <SiJupyter/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Jupyter<br />Notebook</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                            <SiMysql/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">MySQL</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                            <SiMicrosoftsqlserver/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">SQL<br />Server</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 flex flex-col items-center text-red-600">
                            <SiApachecouchdb/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">CouchDB</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-green-600">
                            <BiLogoNodejs/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">NodeJs</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-sky-400">
                            <BiLogoReact/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">React</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-blue-200">
                            <BiLogoJquery/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">JQuery</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-green-400">
                            <BiLogoMongodb/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">MongoDB</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-gray-400">
                            <BiDirections/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">WebSockets</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-gray-200">
                            <BiSolidFileJson/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">APIS</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-gray-200">
                            <SiExpress/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">Express.js</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-blue-500">
                            <BiLogoTypescript/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">TypeScript</p>
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-red-600">
                            <AiOutlinePercentage/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">EJS</p>
                        </div>
                    </div>
                </div>            
            </div>
        </>
    );
};

export default skills;
