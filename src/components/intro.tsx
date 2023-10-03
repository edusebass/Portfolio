import {useEffect, useState, useRef} from 'react';
import { BiDownload } from 'react-icons/bi';
import Button from './button';
import imgPerfil from '../../public/img/fotocarnet.jpg';
import CV from '../../public/docs/EduardoAlmachiCV.pdf';
import Typed from 'typed.js';

const intro = () => {

    const [shouldAnimate, setShouldAnimate] = useState(false);

    const textRef = useRef(null);

    useEffect(() => {
        const options = {
        strings: ["Hi, I´m Eduardo Almachi 👋"],
        typeSpeed: 50, 
        showCursor: false, 
        };

        const typed = new Typed(textRef.current, options);

        return () => {
        typed.destroy(); 
        };
    }, []);

    useEffect(() => {   
        setShouldAnimate(true)
    });

    return (
        <div className='flex px-1 py-5 sm:px-52 sm:py-40 text-white w-full h-full' id='intro'>
            <div className='flex'>
                <img src={imgPerfil} className='my-12 hidden sm:block sm:h-auto sm:max-h-56 rounded-full'/>
                <div className={`px-7 pt-7 sm:px-20 ${ shouldAnimate ? "animate-fade-right animate-once animate-duration-[600ms] animate-delay-300" : ""}`}>
                    
                    <span ref={textRef} className=" font-mono whitespace-no-wrap border-r-4 border-solid ">Hi, I´m Eduardo Almachi 👋</span>
                    
                    <h2 className='text-5xl font-extrabold text-yellow-400 sm:text-7xl'>Software Developer</h2>
                    <p className='py-2 text-slate-400 pb-4'>Entusiasta de la tecnología dedicado con una curiosidad insaciable por desentrañar las complejidades de nuestro mundo digital.</p>
                    <Button icon={<BiDownload/>} href={CV}>Download CV</Button>
                </div>
            </div>
        </div>
    );
};

export default intro;