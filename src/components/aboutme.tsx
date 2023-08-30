import {BiLogoPython, BiLogoCPlusPlus, BiLogoHtml5, BiTerminal, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoJquery} from "react-icons/bi";
import {FaJava} from "react-icons/fa";
import {BsGit} from "react-icons/bs";
import {SiJupyter, SiMysql, SiMicrosoftsqlserver, SiApachecouchdb} from "react-icons/si";

const AboutMe = () => {
    
    return (
        <>
        <div className="flex justify-center p-3"> 
            <div className="text-white text-8xl">
                <h2 className="text-yellow-400 font-extrabold text-center pb-8 text-3xl ">Skills</h2>
                <div className="flex flex-wrap grow justify-center p-10 ">
                    <div className=" text-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <BiLogoPython/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">Python</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-sky-700">
                        <BiLogoCPlusPlus/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">C++</p>        
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <FaJava/> 
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Java</p>       
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-orange-600">
                        <BiLogoHtml5/>    
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">HTML</p>    
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-blue-600">
                        <BiLogoCss3/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">CSS</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 flex flex-col items-center text-yellow-500">
                        <BiLogoJavascript className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/> 
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-white">JavaScript</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-amber-700">
                        <BsGit/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">Git</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 flex flex-col items-center">
                        <BiTerminal className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Terminal</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 flex flex-col items-center">
                        <SiJupyter/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Jupyter<br />Notebook</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <SiMysql/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">MySQL</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <SiMicrosoftsqlserver/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">SQL<br />Server</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 flex flex-col items-center text-red-600">
                        <SiApachecouchdb/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">CouchDB</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-green-600">
                        <BiLogoNodejs/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">NodeJs</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-sky-400">
                        <BiLogoReact/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">React</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-blue-200">
                        <BiLogoJquery/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">JQuery</p>
                    </div>
                </div>
            </div>            
        </div>
        </>
    );
};

export default AboutMe;