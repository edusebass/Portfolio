import imgSimon from '../../public/img/simon.png';
import imgDicee from '../../public/img/dicee.png';
import projectc from '../../public/img/projectc++.png';
import detectot from '../../public/img/detector de caras.png';
import javacrud from '../../public/img/JAVACRTUD.png';
import apipokemon from '../../public/img/apìpokemon.png';
import calculador from '../../public/img/calculadora.png';
import appfarmacia from '../../public/img/appfarmacia.png';
import tolist from '../../public/img/tolist.png';
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoJquery, BiLogoGithub, BiLogoCPlusPlus,BiLogoPython, BiLogoJava } from 'react-icons/bi';
import { MdOutlinePageview } from 'react-icons/md';
import { SiMysql } from 'react-icons/si';


import Button from './button';

const Project = () => {
    return (
        <>
                <h2 className="flex text-5xl font-bold text-yellow-500 justify-center pb-10" id='projects'>Projectos</h2>

                <div className='p-2 lex flex-col sm:p-10 f sm:justify-between sm:flex sm:flex-row '>
                    <div className=' flex flex-col p-5 justify-center items-center sm:'>
                        <p className="inline text-white font-bold pb-2">SIMON DICEE WEBSITE</p>
                        <img src={imgSimon} className='w-60 h-auto p- rounded-xl'/>
                        <p className='text-white items-start p-7'>Videojuego sobre memorización interactiva.</p>
                        <div className='flex flex-col sm:flex-row text-5xl'>
                                <div className="flex items-center"> 
                                    <div className=" text-white p-1 px-3 flex flex-col items-center">
                                        <BiLogoHtml5 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration- text-orange-500"/>    
                                        <p className=" text-sm">HTML</p>    
                                    </div>
                                    <div className=" text-white  p-1 px-3 flex flex-col items-center">
                                        <BiLogoCss3 className="text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000"/>
                                        <p className=" text-sm text-center">CSS</p>
                                    </div>
                                    <div className=" text-white p-1 px-3 flex flex-col items-center ">
                                        <BiLogoJavascript className=" text-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/> 
                                        <p className=" text-sm">JavaScript</p>
                                    </div>
                                </div>
                            <div className=" text-white p-1 px-3 flex flex-col items-center">
                                <BiLogoJquery className=" text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/>
                                <p className=" text-sm">JQuery</p>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <Button icon={<MdOutlinePageview/>} href='https://edusebass.github.io/SIMONDICEE-WEBSITE/'>Visit Website</Button>
                            <Button icon={<BiLogoGithub/>} href='https://github.com/edusebass/SIMONDICEE-WEBSITE'>Visit Repo</Button>
                        </div>
                    </div>

                    <div className=' flex flex-col p-5 justify-center items-center '>
                        <p className="inline text-white font-bold pb-2">Dados Game WEBSITE</p>
                        <img src={imgDicee} className='w-60 h-auto p-2 rounded-xl'/>
                        <p className='text-white items-start p-7'>Sitio web de juegos que permite a los usuarios participar en un juego de dados online. El objetivo del juego es conseguir el mayor número posible.</p>
                        <div className='flex flex-col sm:flex-row text-5xl'>
                                <div className="flex items-center"> 
                                    <div className=" text-white p-1 px-3 flex flex-col items-center">
                                        <BiLogoHtml5 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration- text-orange-500"/>    
                                        <p className=" text-sm">HTML</p>    
                                    </div>
                                    <div className=" text-white  p-1 px-3 flex flex-col items-center">
                                        <BiLogoCss3 className="text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000"/>
                                        <p className=" text-sm text-center">CSS</p>
                                    </div>
                                    <div className=" text-white p-1 px-3 flex flex-col items-center ">
                                        <BiLogoJavascript className=" text-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/> 
                                        <p className=" text-sm">JavaScript</p>
                                    </div>
                                </div>
                            <div className=" text-white p-1 px-3 flex flex-col items-center">
                                <BiLogoJquery className=" text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/>
                                <p className=" text-sm">JQuery</p>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <Button icon={<MdOutlinePageview/>} href='https://edusebass.github.io/DICEE-website/'>Visit Website</Button>
                        </div>
                            <Button icon={<BiLogoGithub/>} href='https://github.com/edusebass/DICEE-website'>Visit Repo</Button>
                    </div>
                    
                    <div className=' flex flex-col p-5 justify-center items-center'>
                        <p className="inline text-white font-bold pb-2">APP Control de Inventario</p>
                        <img src={projectc} className='w-60 h-auto p-2 rounded-xl'/>
                        <p className='text-white items-start p-7'>Proyecto realizado con C++ su función es el control de inventarios de productos, y CRUD de administradores y clientes. 
                        Los datos seguardan en archivos(.txt).</p>
                        <div className='flex flex-col sm:flex-row'>
                            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-sky-200 text-5xl">
                            <BiLogoCPlusPlus/>
                            <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">C++</p>        
                        </div>
                        </div>
                        <div className='pt-3'>
                            <Button icon={<BiLogoGithub/>} href='https://github.com/edusebass/import-project-cplusplus.git'>Visit repo</Button>
                        </div>  
                    </div>
                    
                </div> 
                {/*  */}
                
                <div className='p-2 lex flex-col sm:p-10 f sm:justify-between sm:flex sm:flex-row'>

                    <div className=' flex flex-col p-5 justify-center items-center'>
                        <p className="inline text-white font-bold pb-2">App Java Crud</p>
                        <img src={javacrud} className='w-60 h-auto p-2 rounded-xl'/>
                        <p className='text-white items-start p-7'>
                        Una aplicación creada con Java Swing que maneja datos conectados a una base de datos MySQL.
                        </p>
                        <div className='flex flex-col sm:flex-row'>
                            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-white text-6xl">
                            <BiLogoJava/>
                            <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">Java</p>        
                            </div>
                            <div className='className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 p-1 px-3 text-white text-6xl'>
                            <SiMysql/>
                            <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">MySQL</p>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <Button icon={<BiLogoGithub/>} href='https://github.com/edusebass/PruebaPOOSQL.git'>Visit repo</Button>
                        </div>  
                    </div>

                    <div className='flex flex-col p-5 justify-center items-center'>
                        <p className="inline text-white font-bold pb-2">Detector de rostros</p>
                        <img src={detectot} className='w-60 h-auto p-2 rounded-xl' />
                        <p className='text-white items-start p-7'>
                        App con python que detecta todo tipo de rostros.
                        </p>
                        <div className='flex flex-col items-center justify-center text-center sm:flex-row'>
                            <div className="text-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 p-1 px-3 text-5xl text-center justify-center">
                                <div className="flex items-center"> 
                                    <BiLogoPython className="text-center" />
                                    <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 text-sm text-center text-white ml-1">
                                        Python
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <Button icon={<BiLogoGithub />} href='https://github.com/edusebass/Detector-de-caraas-con-Python.git'>
                                Visit repo
                            </Button>
                        </div>
                    </div>

                    <div className='flex flex-col p-5 justify-center items-center'>
                        <p className="inline text-white font-bold pb-2">ApiPokemon Cartas</p>
                        <img src={apipokemon} className='w-80 h-auto p-2 rounded-xl' />
                        <p className='text-white items-start p-7'>
                        Pagina web que trae elementos de una api de pokemon y cada vez que recargas puedes ver nuevas cartas de pokemon.
                        </p>
                        <div className='flex flex-col items-center justify-center text-center sm:flex-row'>
                            <div className="text-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 p-1 px-3 text-5xl text-center justify-center">
                                <div className="flex items-center"> 
                                <div className=" text-white p-1 px-3 flex flex-col items-center">
                                    <BiLogoHtml5 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration- text-orange-500"/>    
                                    <p className=" text-sm">HTML</p>    
                                </div>
                                <div className=" text-white  p-1 px-3 flex flex-col items-center">
                                    <BiLogoCss3 className="text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000"/>
                                    <p className=" text-sm text-center">CSS</p>
                                </div>
                                <div className=" text-white p-1 px-3 flex flex-col items-center ">
                                    <BiLogoJavascript className=" text-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/> 
                                    <p className=" text-sm">JavaScript</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <Button icon={<MdOutlinePageview/>} href='https://edusebass.github.io/ApiPokemon/'>Visit Website</Button>
                        </div>
                            <Button icon={<BiLogoGithub/>} href='https://github.com/edusebass/ApiPokemon.git'>Visit Repo</Button>
                        
                    </div>

                </div>
                <div className='p-2 lex flex-col sm:p-10 f sm:justify-center sm:flex sm:flex-row'>
                    <div className='flex flex-col p-5 justify-center items-center'>
                        <p className="inline text-white font-bold pb-2">App Calculadora Java</p>
                        <img src={calculador} className='w-auto h-80 p-2 rounded-xl' />
                        <p className='text-white items-start p-7'>
                        Calculadora swing Java con todas las características de una calculadora trigonométrica normal.
                        </p>
                        <div className='flex flex-col items-center justify-center text-center sm:flex-row'>
                            <div className="text-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 p-1 px-3 text-5xl text-center justify-center">
                                <div className="flex items-center"> 
                                <div className=" text-white p-1 px-3 flex flex-col items-center">
                                    <BiLogoJava className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration- text-orange-500"/>    
                                    <p className=" text-sm">JAVA</p>    
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <Button icon={<BiLogoGithub/>} href='https://github.com/edusebass/javaxCalculadora.git'>Visit Repo</Button>
                        </div>
                    </div>
                    <div className='flex flex-col p-5 justify-center items-center'>
                        <p className="inline text-white font-bold pb-2">App Gestion Farmacia</p>
                        <img src={appfarmacia} className='w-auto h-80 p-2 rounded-xl' />
                        <p className='text-white items-start p-7'>
                        App realizada con java que consiste en gestionar productos y ralizar las ventas por caja, y administrar el stock de productos y personas. <br />
                        Gestiona ventas y devuelve facturas de las compras y reportes.
                        </p>
                        <div className='flex flex-col items-center justify-center text-center sm:flex-row'>
                            <div className="text-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 p-1 px-3 text-5xl text-center justify-center">
                                <div className="flex items-center"> 
                                    <div className=" text-white p-1 px-3 flex flex-col items-center">
                                        <BiLogoJava className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration- text-orange-500"/>    
                                        <p className=" text-sm">JAVA</p>    
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className='pt-3'>
                            <Button icon={<BiLogoGithub/>} href='https://github.com/bryandelgado99/Proyecto-Farmacia--2do-Bimestre'>Visit Repo</Button>
                        </div>
                    </div>
                    
                    <div className='flex flex-col p-5 justify-center items-center'>
                        <p className="inline text-white font-bold pb-2">TodoList</p>
                        <img src={tolist} className='w-80 h-auto p-2 rounded-xl' />
                        <p className='text-white items-start p-7'>
                        Proyecto de grupo. Aplicación web de gestión de tareas, con funcionalidad CRUD.
                        </p>
                        <div className='flex flex-col items-center justify-center text-center sm:flex-row'>
                            <div className="text-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 p-1 px-3 text-5xl text-center justify-center">
                                <div className="flex items-center"> 
                                    <div className=" text-white p-1 px-3 flex flex-col items-center">
                                        <BiLogoHtml5 className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration- text-orange-500"/>    
                                        <p className=" text-sm">HTML</p>    
                                    </div>
                                    <div className=" text-white  p-1 px-3 flex flex-col items-center">
                                        <BiLogoCss3 className="text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000"/>
                                        <p className=" text-sm text-center">CSS</p>
                                    </div>
                                    <div className=" text-white p-1 px-3 flex flex-col items-center ">
                                        <BiLogoJavascript className=" text-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-1000 "/> 
                                        <p className=" text-sm">JavaScript</p>
                                    </div>
                                </div>
                                
                            </div> 
                        </div>
                        <div className='pt-3'>
                            <Button icon={<BiLogoGithub/>} href='https://github.com/brittanypallasco2003/Organizador'>Visit Repo</Button>
                        </div>
                    </div>
                    

                </div>
            
        </>
    )
}

export default Project;