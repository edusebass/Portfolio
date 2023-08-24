
import {BiLogoPython, BiLogoCPlusPlus, BiLogoHtml5, BiTerminal, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoJquery} from "react-icons/bi";
import {FaJava} from "react-icons/fa";
import {BsGit} from "react-icons/bs";
import {SiJupyter, SiMysql, SiMicrosoftsqlserver, SiApachecouchdb} from "react-icons/si";

const AboutMe = () => {
    
    return (
        <>
        <div className="flex justify-center p-3"> 
            <div className="text-white text-5xl">
                <h2 className="text-yellow-400 font-bold text-center pb-8">Skills</h2>
                <div className="flex flex-wrap grow justify-center p-10 border-solid border-4 rounded-lg border-yellow-500">
                <BiLogoPython/>
                <BiLogoCPlusPlus/>
                <FaJava/>
                <BiLogoHtml5/>
                <BsGit/>
                <BiTerminal/>
                <BiLogoCss3/>
                <BiLogoJavascript/> 
                <SiJupyter/>
                <SiMysql/>
                <SiMicrosoftsqlserver/>
                <SiApachecouchdb/>
                <BiLogoNodejs/>
                <BiLogoReact/>
                <BiLogoJquery/>
                </div>
            </div>            
        </div>
        </>
    );
};

export default AboutMe;