
// import { useEffect, useState} from 'react'
import AnimatedDiv from './AnimatedDiv'
// import AnimatedText from "./AnimatedText";

const ServiciosLook = () => {

    return (
        <>
        <div className=" flex flex-col sm:flex-row ">
            
                <div className='sm:grid sm:grid-cols-2 sm:gap-5 sm:w-full'>
                    {/* servicio */}
                    <AnimatedDiv delay={0.5} y={50}>
                        <div className="bg-white text-black p-7 flex items-center justify-center shadow-md rounded-3xl h-full sm:m-0 my-10 mx-5">
                            <div className="service">
                                <div className="w-20 m-auto flex">
                                    <img src="https://res.cloudinary.com/dwowtb0ya/image/upload/v1699756446/devrise/landing-page_ps7hrg.svg" alt="Prototipo"/>
                                </div>
                                <h3 className="text-xl text-center font-bold my-2">Desarrollo de landig page</h3>
                                <div className="horizontal-line-wrap">
                                    <span className="bg-yellow-500 h-1 block h-23"></span>
                                </div>
                                <p className="mt-2">
                                Una landing page tiene la finalidad de captar la atención del visitante y persuadirlo, 
                                contiene acciones como llenar un formulario, 
                                seguir la página o realizar la compra, entre otras acciones.
                                </p>
                            </div>
                        </div>
                    </AnimatedDiv>
                    {/* servicio */}
                    <AnimatedDiv delay={0.5} y={50}>
                        <div className="bg-white text-black p-7 flex flex-col items-center justify-center shadow-md rounded-3xl sm:m-0 my-10 mx-5">
                            <div className="service">
                                <div className="w-20 m-auto flex">
                                    <img src="https://res.cloudinary.com/dwowtb0ya/image/upload/v1699755752/devrise/prototipo_1_sw0aql.svg" alt="Prototipo"/>
                                </div>
                                <h3 className="text-xl text-center font-bold my-2">Prototipo y diseño de interfaces</h3>
                                <div className="horizontal-line-wrap">
                                    <span className="bg-yellow-500 h-1 block h-23"></span>
                                </div>
                                <p className="mt-2">
                                    Un prototipo te brinda una idea de cómo se presentará tu aplicación web o móvil a los usuarios, identificando los elementos necesarios para la interfaz y facilitando el desarrollo de su diseño.
                                </p>
                            </div>
                        </div>
                    </AnimatedDiv>
                    {/* servicio */}
                    <AnimatedDiv delay={0.5} y={50}>
                        <div className="bg-white text-black p-7 flex flex-col items-center justify-center shadow-md rounded-3xl sm:m-0 my-10 mx-5">
                            <div className="service">
                                <div className="w-20 m-auto flex">
                                    <img src="https://res.cloudinary.com/dwowtb0ya/image/upload/v1699756486/devrise/cms_ynr8jc.svg" alt="Prototipo"/>
                                </div>
                                <h3 className="text-xl text-center font-bold my-2">Desarrollo de CMS</h3>
                                <div className="horizontal-line-wrap">
                                    <span className="bg-yellow-500 h-1 block h-23"></span>
                                </div>
                                <p className="mt-2">
                                Un CMS, permite crear, 
                                organizar, publicar y eliminar contenidos dinámicos de una aplicación web, 
                                donde el usuario de forma sencilla 
                                y rápida de dar datos con el contenido que quiere publicar.
                                </p>
                            </div>
                        </div>
                    </AnimatedDiv>
                    {/* servicio */}
                    <AnimatedDiv delay={0.5} y={50}>
                        <div className="bg-white text-black p-7 flex flex-col items-center justify-center shadow-md rounded-3xl sm:m-0 my-10 mx-5">
                            <div className="service">
                                <div className="w-20 m-auto flex">
                                    <img src="https://res.cloudinary.com/dwowtb0ya/image/upload/v1699756523/devrise/internet_yx2h4l.svg" alt="Prototipo"/>
                                </div>
                                <h3 className="text-xl text-center font-bold my-2">Desarrollo de aplicación web</h3>
                                <div className="horizontal-line-wrap">
                                    <span className="bg-yellow-500 h-1 block h-23"></span>
                                </div>
                                <p className="mt-2">
                                Una aplicación web es una aplicación de software que puede utilizar accediendo 
                                a un servidor web a través de internet. Esta mismo puede abrir las puertas
                                al mundo digital.
                                </p>
                            </div>
                        </div>
                    </AnimatedDiv>
                </div>
                
            </div>
        </>
    );
};

export default ServiciosLook;
