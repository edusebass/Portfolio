
// import { useEffect, useState} from 'react'
// import AnimatedDiv from './AnimatedDiv'
// import AnimatedText from "./AnimatedText";
import EstudioCard, {} from './EstudioCard'

const Educacion = () => {

    return (
        <>
            
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Formacion Academica</h1>
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
            />

        </div>
        <h1 className="text-3xl mt-10 font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Formacion Complementaria</h1>
    </div>
</section>


        </>
    );
};

export default Educacion;
