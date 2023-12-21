
import CardServicios from './CardServicios'

const ServiciosLook = () => {

    return (
        <>
        <div className=" flex flex-col sm:flex-row ">
                <div className='sm:grid sm:grid-cols-2 sm:gap-5 sm:w-full'>
                    <CardServicios 
                        imgIcon='https://res.cloudinary.com/dwowtb0ya/image/upload/v1699756446/devrise/landing-page_ps7hrg.svg'
                        titulo='Desarrollo de landing page'
                        descripcion='Una landing page tiene la finalidad de captar la atención del visitante y persuadirlo, 
                        contiene acciones como llenar un formulario, 
                        seguir la página o realizar la compra, entre otras acciones.'
                    />
                    <CardServicios 
                        imgIcon='https://res.cloudinary.com/dwowtb0ya/image/upload/v1699755752/devrise/prototipo_1_sw0aql.svg'
                        titulo='Prototipo y diseño de interfaces'
                        descripcion='Un prototipo te brinda una idea de cómo se presentará tu aplicación web o móvil a los usuarios, 
                        identificando los elementos necesarios para la interfaz y facilitando el desarrollo de su diseño.'
                    />
                    <CardServicios 
                        imgIcon='https://res.cloudinary.com/dwowtb0ya/image/upload/v1699756486/devrise/cms_ynr8jc.svg'
                        titulo='Desarrollo de CMS'
                        descripcion=' Un CMS, permite crear, 
                        organizar, publicar y eliminar contenidos dinámicos de una aplicación web, 
                        donde el usuario de forma sencilla 
                        y rápida de dar datos con el contenido que quiere publicar.'
                    />
                    <CardServicios 
                        imgIcon='https://res.cloudinary.com/dwowtb0ya/image/upload/v1699756523/devrise/internet_yx2h4l.svg'
                        titulo='Desarrollo de aplicación web'
                        descripcion='Una aplicación web es una aplicación de software que puede utilizar accediendo 
                        a un servidor web a través de internet. Esta mismo puede abrir las puertas
                        al mundo digital.'
                    />
                </div>
            </div>
        </>
    );
};

export default ServiciosLook;
