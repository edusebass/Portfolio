import {BiLogoPython, BiLogoCPlusPlus, BiLogoHtml5, BiTerminal, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoJquery,
    BiSolidFileJson, BiLogoMongodb, BiDirections, BiLogoTypescript} from "react-icons/bi";
import {FaJava} from "react-icons/fa";
import {BsGit} from "react-icons/bs";
import {SiJupyter, SiMysql, SiMicrosoftsqlserver, SiApachecouchdb, SiExpress} from "react-icons/si";
import { AiOutlinePercentage } from "react-icons/ai";
import '../../public/img/codigo.jpg'
import AnimatedText from './AnimatedText'
import SkillComponent from './SkillComponent';

const skills = () => {
    return (
        <>
            <div className="flex justify-center p-3" id="skills"> 
                <div className="text-white text-6xl sm:text-8xl">
                    <AnimatedText 
                        text='Habilidades && Herramientas'
                        className='text-yellow-400 font-extrabold text-center pb-8 text-5xl mt-16 my-3'
                        fromTop
                        stylesWords="hover:text-white"
                    />
                    <div className="flex flex-wrap grow justify-center p-0 sm:h-screen sm:p-10 ">
                        <SkillComponent
                            icon={<BiLogoPython/>}
                            color="text-blue-300"
                            porcentaje={30}
                            nombreSkill="Python"
                        />

                        <SkillComponent
                            icon={<BiLogoCPlusPlus/>}
                            color="text-sky-700"
                            porcentaje={70}
                            nombreSkill="C++"
                        />

                        <SkillComponent
                            icon={<FaJava />}
                            color="text-white"
                            porcentaje={75}
                            nombreSkill="Java"
                        />

                        <SkillComponent
                            icon={<BiLogoHtml5 />}
                            color="text-orange-600"
                            porcentaje={100}
                            nombreSkill="HTML"
                        />

                        <SkillComponent
                            icon={<BiLogoCss3 />}
                            color="text-blue-600"
                            porcentaje={100}
                            nombreSkill="CSS"
                        />

                        <SkillComponent
                            icon={<BiLogoJavascript />}
                            color="text-yellow-500"
                            porcentaje={80}
                            nombreSkill="JavaScript"
                        />

                        <SkillComponent
                            icon={<BsGit />}
                            color="text-amber-700"
                            porcentaje={100}
                            nombreSkill="Git"
                        />

                        <SkillComponent
                            icon={<BiTerminal />}
                            color="text-white"
                            porcentaje={100}
                            nombreSkill="Terminal"
                        />

                        <SkillComponent
                            icon={<SiJupyter />}
                            color="text-white"
                            porcentaje={80}
                            nombreSkill="Jupyter Notebook"
                        />

                        <SkillComponent
                            icon={<SiMysql />}
                            color="text-white"
                            porcentaje={80}
                            nombreSkill="MySQL"
                        />

                        <SkillComponent
                            icon={<SiMicrosoftsqlserver />}
                            color="text-white"
                            porcentaje={80}
                            nombreSkill="SQL Server"
                        />

                        <SkillComponent
                            icon={<SiApachecouchdb />}
                            color="text-red-600"
                            porcentaje={80}
                            nombreSkill="CouchDB"
                        />

                        <SkillComponent
                            icon={<BiLogoNodejs />}
                            color="text-green-600"
                            porcentaje={80}
                            nombreSkill="NodeJs"
                        />

                        <SkillComponent
                            icon={<BiLogoReact />}
                            color="text-sky-400"
                            porcentaje={80}
                            nombreSkill="React"
                        />

                        <SkillComponent
                            icon={<BiLogoJquery />}
                            color="text-blue-200"
                            porcentaje={80}
                            nombreSkill="JQuery"
                        />

                        <SkillComponent
                            icon={<BiLogoMongodb />}
                            color="text-green-400"
                            porcentaje={80}
                            nombreSkill="MongoDB"
                        />

                        <SkillComponent
                            icon={<BiDirections />}
                            color="text-gray-400"
                            porcentaje={80}
                            nombreSkill="WebSockets"
                        />

                        <SkillComponent
                            icon={<BiSolidFileJson />}
                            color="text-gray-200"
                            porcentaje={100}
                            nombreSkill="APIS"
                        />

                        <SkillComponent
                            icon={<SiExpress />}
                            color="text-gray-200"
                            porcentaje={80}
                            nombreSkill="Express.js"
                        />

                        <SkillComponent
                            icon={<BiLogoTypescript />}
                            color="text-blue-500"
                            porcentaje={80}
                            nombreSkill="TypeScript"
                        />

                        <SkillComponent
                            icon={<AiOutlinePercentage />}
                            color="text-red-600"
                            porcentaje={80}
                            nombreSkill="EJS"
                        />

                    </div>
                </div>            
            </div>
        </>
    );
};

export default skills;
