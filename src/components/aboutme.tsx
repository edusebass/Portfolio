// import  Streaks  from './GitHubStreak';
// import Top from './GitTopLanguajes'; 

const AboutMe = () =>{
    return(
        <>
            <div className="flex h-full flex-col mt-8 pt-5 md:pt-20 md:mt-24 md:px-20 " id="aboutme">
                <h2 className="flex text-center justify-center pb-10 text-6xl font-extrabold text-yellow-500">Sobre mí</h2>
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black"> 
                                </div>
                                <h6 className="text-xl font-semibold">Referencias</h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                Msc. Byron Loarte <br />
                                <span className="italic font-bold"> byron.loarteb@epn.edu.ec</span> <br />
                                <span className="italic font-bold"> +593 99 564 4186</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 px-4 text-center">
                        <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-400">
                                </div>
                                <h6 className="text-xl font-semibold">¿Por qué programo?</h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                Me encanta la codificación y desarrollo web y aplicaciones de escritorio APP. <br /> <br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-indigo-950">    
                                </div>
                                <h6 className="text-xl font-semibold">¿Experiencia?</h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                !Claro que sí¡ <br />He tenido un avance rápido en aprendizaje hasta el día de hoy, he realizado projectos y he tenido el 
                                privilegio de crear software para diversos clientes. <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}

export default AboutMe;
