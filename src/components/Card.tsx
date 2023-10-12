import Button from "./button";

const Card: React.FC<Card> = ({ 
    img,
    titulo,
    fecha, 
    descripcion,
    icons,
    iconColors,
    iconNames,
    linkRepo,
    iconButton
}) => {
    
    return (
        <>
            <div className="rounded-2xl bg-slate-200 max-w-sm m-3 overflow-hidden shadow-lg">
                <img className="w-full" src={img} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{titulo}</div>
                    <div className="font-medium mb-2">{fecha}</div>
                    <p className="text-gray-700 text-base">{descripcion}</p>
                </div>
                <div className="flex justify-center px-6 pt-4 pb-2">
                    {icons.map((IconComponent, index) => (
                        <div key={index} className="text-center">
                            <IconComponent size={50} className={`${iconColors[index]} mx-5`} />
                            <div>{iconNames[index]}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <Button href={linkRepo} icon={iconButton}/>
                </div>
            </div>
        </>
    )
}

export default Card;