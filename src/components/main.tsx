
import Button from './button';
import imgPerfil from '../../public/img/fotocarnet.jpg';

const main = () => {

    

    return (
        <div className='flex px-32 py-10 sm:px-52 sm:py-48'>

            <div className='flex '>
                <img src={imgPerfil} className='my-5 hidden sm:block sm:h-auto sm:max-h-48 rounded-full'/>
                <div className='p-5'>
                    <h2 className='text-blue-950 font-bold text-lg'>Hi, I´m Eduardo Almachi 👋</h2>
                    <h2 className='text-5xl font-extrabold py-2'>Software Developer</h2>
                    <p className='py-1'>Dedicated technology enthusiast with an insatiable curiosity for unraveling the complexities of our digital word.</p>
                    <Button/>
                </div>
            </div>
        </div>
    );
};

export default main;