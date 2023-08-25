import imgSimon from '../../public/img/simon.png';
import imgDicee from '../../public/img/dicee.png';
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoJquery } from 'react-icons/bi';

import Button from './button';

const Project = () => {
    return (
        <>
            <div className="flex flex-col p-5 sm:p-16">
                <h2 className="flex text-5xl font-bold text-yellow-500 justify-center pb-10">Projects</h2>
                <div className='p-2 sm:p-10 flex flex-col sm:justify-between sm:flex sm:flex-row '>

                    <div className=' flex flex-col p-5 justify-center items-center border-2 border-yellow-400 rounded-xl'>
                        <p className="inline text-white font-bold pb-2">SIMON DICEE WEBSITE</p>
                        <img src={imgSimon} className='w-60 h-auto p- rounded-xl'/>
                        <p className='text-white items-start p-7'>Video game about interactive memorization</p>
                        <div className='flex flex-col sm:flex-row'>
                            <div className=" text-white p-1 px-3 flex flex-col items-center">
                                <BiLogoHtml5 className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000"/>    
                                <p className=" text-sm">HTML</p>    
                            </div>
                            <div className=" text-white  p-1 px-3 flex flex-col items-center">
                                <BiLogoCss3 className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000"/>
                                <p className=" text-sm text-center">CSS</p>
                            </div>
                            <div className=" text-white p-1 px-3 flex flex-col items-center ">
                                <BiLogoJavascript className=" text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/> 
                                <p className=" text-sm">JavaScript</p>
                            </div>
                            <div className=" text-white p-1 px-3 flex flex-col items-center">
                                <BiLogoJquery className=" text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/>
                                <p className=" text-sm">JQuery</p>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <Button href='https://edusebass.github.io/SIMONDICEE-WEBSITE/'>Visit Website</Button>
                        </div>
                    </div>

                    <div className=' flex flex-col p-5 justify-center items-center border-2 border-yellow-400 rounded-xl '>
                        <p className="inline text-white font-bold pb-2">SIMON DICEE WEBSITE</p>
                        <img src={imgDicee} className='w-60 h-auto p-2 rounded-xl'/>
                        <p className='text-white items-start p-7'>Game website that allows users to participate in an online dice game. The goal of the game is to get the highest number possible.</p>
                        <div className='flex flex-col sm:flex-row'>
                            <div className=" text-white p-1 px-3 flex flex-col items-center">
                                <BiLogoHtml5 className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000"/>    
                                <p className=" text-sm">HTML</p>    
                            </div>
                            <div className=" text-white  p-1 px-3 flex flex-col items-center">
                                <BiLogoCss3 className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000"/>
                                <p className=" text-sm text-center">CSS</p>
                            </div>
                            <div className=" text-white p-1 px-3 flex flex-col items-center ">
                                <BiLogoJavascript className=" text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/> 
                                <p className=" text-sm">JavaScript</p>
                            </div>
                            <div className=" text-white p-1 px-3 flex flex-col items-center">
                                <BiLogoJquery className=" text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/>
                                <p className=" text-sm">JQuery</p>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <Button href='https://edusebass.github.io/DICEE-website/'>Visit Website</Button>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Project;