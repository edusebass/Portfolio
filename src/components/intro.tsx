import {useEffect, useState} from 'react';
import { BiDownload } from 'react-icons/bi';
import Button from './button';
import imgPerfil from '../../public/img/fotocarnet.jpg';
import CV from '../../public/docs/EduardoAlmachiCV.pdf';

const intro = () => {

    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {   
        setShouldAnimate(true)
    });

    return (
        <div className='flex px-1 py-5 sm:px-52 sm:py-40 text-white w-full h-full'>
            <div className='flex'>
                <img src={imgPerfil} className='my-12 hidden sm:block sm:h-auto sm:max-h-56 rounded-full'/>
                <div className={`px-7 pt-7 sm:px-20 ${ shouldAnimate ? "animate-fade-right animate-once animate-duration-[600ms] animate-delay-300" : ""}`}>
                    <h2 className='font-bold text-lg '>Hi, I´m Eduardo Almachi 👋</h2>
                    <h2 className='text-5xl font-extrabold text-yellow-400 sm:text-7xl'>Software Developer</h2>
                    <p className='py-2 text-slate-400 pb-4'>Dedicated technology enthusiast with an insatiable curiosity for unraveling the complexities of our digital word.</p>
                    <Button icon={<BiDownload/>} href={CV}>Download CV</Button>
                </div>
            </div>
        </div>
    );
};

export default intro;