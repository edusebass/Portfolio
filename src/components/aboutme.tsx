
import {BiLogoPython, BiLogoCPlusPlus, BiLogoHtml5, BiTerminal, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoJquery} from "react-icons/bi";
import {FaJava} from "react-icons/fa";
import {BsGit} from "react-icons/bs";
import {SiJupyter, SiMysql, SiMicrosoftsqlserver, SiApachecouchdb} from "react-icons/si";

const AboutMe = () => {
    
    return (
        <>
        <div className="flex">
            <div className="hidden text-white px-8">
                <h2>Eduardo</h2>
                <h3>Software Developer</h3>  
                <ul>
                    <li> - Skills</li>
                    <li> - Projects</li>
                    <li> - About me</li>
                    <li> - Contact me</li>
                </ul>
            </div>  
            <div className="flex justify-center">
                <div className="text-white text-5xl">
                    <h2 className="text-yellow-400 font-bold text-center pb-8">Skills</h2>
                    <div className="flex p-5">
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
            
        </div>
        </>
    );
};

export default AboutMe;