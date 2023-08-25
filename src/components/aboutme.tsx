import {BiLogoPython, BiLogoCPlusPlus, BiLogoHtml5, BiTerminal, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoJquery} from "react-icons/bi";
import {FaJava} from "react-icons/fa";
import {BsGit} from "react-icons/bs";
import {SiJupyter, SiMysql, SiMicrosoftsqlserver, SiApachecouchdb} from "react-icons/si";

const AboutMe = () => {
    
    return (
        <>
        <div className="flex justify-center p-3"> 
            <div className="text-white text-5xl">
                <h2 className="text-yellow-400 font-extrabold text-center pb-8">Skills</h2>
                <div className="flex flex-wrap grow justify-center p-10 border-solid border-4 rounded-lg border-yellow-500 ">
                    <div className="p-1 px-3">
                        <BiLogoPython/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Python</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <BiLogoCPlusPlus/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">C++</p>        
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <FaJava/> 
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Java</p>       
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <BiLogoHtml5/>    
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">HTML</p>    
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <BiLogoCss3/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">CSS</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 flex flex-col items-center ">
                        <BiLogoJavascript className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/> 
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm">JavaScript</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <BsGit/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">Git</p>
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
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 flex flex-col items-center">
                        <SiApachecouchdb/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">CouchDB</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <BiLogoNodejs/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">NodeJs</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <BiLogoReact/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">React</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3">
                        <BiLogoJquery/>
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center">JQuery</p>
                    </div>
                </div>
            </div>            
        </div>
        </>
    );
};

export default AboutMe;