import Button from "./button";
import { MdOutlinePageview } from 'react-icons/md';
import { BiLogoGithub } from 'react-icons/bi';

const Card: React.FC<Card> = ({ 
    img,
    titulo,
    fecha, 
    descripcion,
    icons,
    iconColors,
    iconNames,
    linkRepo,
    linkWeb
}) => {
    
    return (
        <>
            <div className="rounded-3xl bg-white max-w-min sm:max-w-xs max-h-full m-3 overflow-hidden shadow-lg">
                <img className="w-full" src={img} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{titulo}</div>
                    <div className="font-medium mb-2">{fecha}</div>
                    <p className="text-gray-700 text-base">{descripcion}</p>
                </div>
                <div className="flex flex-wrap justify-center px-6 pt-4 pb-2">
                    {icons.map((IconComponent, index) => (
                        <div key={index} className="text-center">
                            <IconComponent size={50} className={`${iconColors[index]} mx-5`} />
                            <div>{iconNames[index]}</div>
                        </div>
                    ))}
                </div>
                <div className=" flex flex-row justify-center mx-2 mt-5 mb-3">
                    <Button href={linkRepo} icon={<BiLogoGithub/>} descripButton="Repo"/>
                    <Button href={linkWeb} icon={<MdOutlinePageview/>} descripButton="WebSite"/>
                </div>
            </div>
        </>
    )
}

export default Card;