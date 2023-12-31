import Button from "./button";
import { MdOutlinePageview } from 'react-icons/md';
import { BiLogoGithub } from 'react-icons/bi';
import AnimatedDiv from './AnimatedDiv'


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
        <AnimatedDiv delay={0.2} y={50} x={25}>

            <div className="rounded-3xl bg-white max-h-min m-3 overflow-hidden shadow-lg sm:max-h-full sm:max-w-xs">
                <img className="w-full" src={img} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{titulo}</div>
                    <div className="font-medium mb-2">{fecha}</div>
                    <p className="text-gray-700 text-sm">{descripcion}</p>
                </div>
                <div className=" px-3 flex flex-wrap justify-around">
                    {icons.map((IconComponent, index) => (
                        <div key={index} className="text-center">
                            <IconComponent size={30} className={`text-${iconColors[index]} mx-3`} />
                            <div className="text-xs">{iconNames[index]}</div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-center mx-2 mt-2 mb-3">
                    <Button 
                        href={linkRepo} 
                        icon={<BiLogoGithub/>} 
                        descripButton="Repo"
                        classname=""
                    />
                    <Button 
                        href={linkWeb} 
                        icon={<MdOutlinePageview/>} 
                        descripButton="WebSite"
                        classname=""
                    />
                </div>
            </div>
        </AnimatedDiv>
        </>
    )
}

export default Card;