import AnimatedText from "./AnimatedText";
import CursosCard from "./CursosCard";
const Cursos = () => { 
    return (
        <>
            <div className="px-4 mx-auto max-w-7xl text-center">
                <AnimatedText
                    text="Cursos"
                    className="text-5xl text-yellow-400 font-bold text-center sm:text-left"
                    stylesWords="hover:text-white"
                    fromTop
                />
                <img src="https://logowik.com/content/uploads/images/udemy-new-20212512.jpg" className="w-36 h-auto rounded-xl mt-4"/>                <div className=" grid items-center max-w-6xl grid-cols-1 sm:grid-cols-2 gap-4 mx-auto mt-6 md:grid-cols-4  ">
                    <CursosCard 
                        imgCurso=""
                        tituloCursos="Python sin fronteras: HTML, CSS, Flask y MySQL"
                        linkCurso="https://1drv.ms/b/s!AiGeBBzH0ZjfouxaBLd2ZM16i-uU5A?e=wbpPvC"
                    />
                    <CursosCard 
                        imgCurso=""
                        tituloCursos="Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS"
                        linkCurso="https://1drv.ms/b/s!AiGeBBzH0Zjfouxb3_ej1MjyWGRzQQ?e=AFHSev"
                    />
                    <CursosCard 
                        imgCurso=""
                        tituloCursos="The Complete 2023 Web Development Bootcamp"
                        linkCurso=""
                    />
                    
                </div>
                <div>
                    <br />
                    <br />
                </div>

                
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg" className="w-36 rounded-xl mt-4"/>
                <div className=" grid items-center max-w-6xl grid-cols-2 gap-4 mx-auto mt-6 md:grid-cols-4">
                    <CursosCard 
                        imgCurso=""
                        tituloCursos="Curso de React.js con TypeScript"
                        linkCurso="https://1drv.ms/b/s!AiGeBBzH0Zjfoutdf4eT7Rk01k8jTA?e=zf1xy0"
                    />
                    
                </div>
                <div>
                    
                    <br />
                </div>
            </div>
            
        </>
    )
}

export default Cursos