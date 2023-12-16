interface Props {
    src: string,
    fecha: string,
    titulo: string,
    descripcion: string,
}

const EstudioCard = ({src, fecha, titulo, descripcion}:Props) => { 
    return (
        <>
            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={src} alt="" />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <h2 className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        {titulo}
                    </h2>
                    <a href="#" className="text-base font-normal text-gray-800 hover:underline dark:text-white ">
                        {descripcion}
                    </a>
                    <span className="text-sm text-gray-500 dark:text-gray-300">{fecha}</span>
                </div>
            </div>
        </>
    )
}

export default EstudioCard