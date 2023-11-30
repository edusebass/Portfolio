import {BiLogoPython, BiLogoCPlusPlus, BiLogoHtml5, BiTerminal, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoJquery,
    BiSolidFileJson, BiLogoMongodb, BiDirections, BiLogoTypescript} from "react-icons/bi";
import {FaJava} from "react-icons/fa";
import {BsGit} from "react-icons/bs";
import {SiJupyter, SiMysql, SiMicrosoftsqlserver, SiApachecouchdb, SiExpress} from "react-icons/si";
import { AiOutlinePercentage } from "react-icons/ai";
import '../../public/img/codigo.jpg'
import  ProgressBar from './ProgressBar';

const skills = () => {
    return (
        <>
            <div className="flex justify-center p-3" id=""> 
                <div className="text-white text-6xl sm:text-8xl">
                    <h2 className="text-yellow-400 font-extrabold text-center pb-8 text-5xl mt-16 my-3 ">Habilidades && Herramientas</h2>
                    <div className="flex flex-wrap grow justify-center p-0 sm:h-screen sm:p-10 ">
                        <div className=" text-blue-300 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                            <BiLogoPython/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">Python</p>
                            <ProgressBar percent={50} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-sky-700">
                            <BiLogoCPlusPlus/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">C++</p>        
                            <ProgressBar percent={50} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                            <FaJava/> 
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Java</p>       
                            <ProgressBar percent={75} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-orange-600">
                            <BiLogoHtml5/>    
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">HTML</p>    
                            <ProgressBar percent={100} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-blue-600">
                            <BiLogoCss3/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">CSS</p>
                            <ProgressBar percent={100} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3  items-center text-yellow-500">
                            <BiLogoJavascript/> 
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-white">JavaScript</p>
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-amber-700">
                            <BsGit/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">Git</p>
                            <ProgressBar percent={100} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3  items-center">
                            <BiTerminal />
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Terminal</p>
                            <ProgressBar percent={100} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 items-center">
                            <SiJupyter/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Jupyter Notebook</p>
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                            <SiMysql/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">MySQL</p>
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                            <SiMicrosoftsqlserver/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">SQL Server</p>
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 items-center text-red-600">
                            <SiApachecouchdb/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">CouchDB</p>
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-green-600">
                            <BiLogoNodejs/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">NodeJs</p>
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-sky-400">
                            <BiLogoReact/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">React</p>
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-blue-200">
                            <BiLogoJquery/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">JQuery</p>
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-green-400">
                            <BiLogoMongodb/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">MongoDB</p>
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-gray-400">
                            <BiDirections/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">WebSockets</p>
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-gray-200">
                            <BiSolidFileJson/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">APIS</p>
                            <ProgressBar percent={100} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-gray-200">
                            <SiExpress/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">Express.js</p>                        
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-blue-500">
                            <BiLogoTypescript/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">TypeScript</p>
                            <ProgressBar percent={80} />
                        </div>
                        <div className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-red-600">
                            <AiOutlinePercentage/>
                            <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">EJS</p>
                            <ProgressBar percent={80} />
                        </div>
                    </div>
                </div>            
            </div>
        </>
    );
};

export default skills;
