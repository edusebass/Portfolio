
// import { useEffect, useState} from 'react'
// import AnimatedDiv from './AnimatedDiv'
// import AnimatedText from "./AnimatedText";
import EstudioCard, {} from './EstudioCard'
import AnimatedText from "./AnimatedText";
import Cursos from './Cursos'


const Educacion = () => {

    return (
        <>
            
            <section className="w-auto mt-16 dark:bg-gray-900 " id='educacion'>
                <div className="container px-6 py-10 mx-auto">
                        <AnimatedText
                        text="Formación Academica"
                        className="text-5xl text-yellow-400 font-bold text-center sm:text-left"
                        stylesWords="hover:text-white"
                        fromTop
                        />
                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                        <EstudioCard 
                            titulo='ESCUELA POLITECNICA NACIONAL' 
                            src='https://cem.epn.edu.ec/imagenes/logos_institucionales/big_jpg/EPN_logo_big.jpg'
                            fecha='2021 - Actualidad'
                            descripcion='Tecnología Superior en Desarrollo de Software'
                        />
                        <EstudioCard 
                            titulo='CEC - EPN' 
                            src='https://res.cloudinary.com/dwowtb0ya/image/upload/v1702695358/Portfolio/cec_pmgjzx.png'
                            fecha='2021 - 2022'
                            descripcion='Ingles A2 Suficiencia'
                            linkCertificacion=''
                        />

                    </div>
                </div>
                <Cursos></Cursos>
            </section>


        </>
    );
};

export default Educacion;
