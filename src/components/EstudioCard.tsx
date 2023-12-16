interface Props {
    src: string,
    fecha: string,
    titulo: string,
    descripcion: string,
    linkCertificacion?: string,
    descripCerti ?: string
}

const EstudioCard = ({src, fecha, titulo, descripcion, linkCertificacion, descripCerti}:Props) => { 
    return (
        <>
            <div className="lg:flex shadow-2xl rounded-3xl bg-white">
                <img className="object-cover w-full rounded-2xl h-56 lg:w-64" src={src} alt="" />

                <div className="flex flex-col justify-between py-6 lg:mx-6 p-4">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white ">
                        {titulo}
                    </h2>
                    <h2  className="text-base font-normal text-gray-800 dark:text-white ">
                        {descripcion}
                    </h2>
                    <a href={linkCertificacion} className="text-base font-normal text-gray-800 dark:text-white">{descripCerti}</a>
                    <span className="text-sm text-gray-500 dark:text-gray-300">{fecha}</span>
                </div>
            </div>
        </>
    )
}

export default EstudioCard