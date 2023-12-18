import { CiShare1 } from "react-icons/ci";

interface Props {
    imgCurso: string;
    tituloCursos: string;
    linkCurso: string;
}

const CursosCard = ({tituloCursos, linkCurso}: Props) => {  
    return (
        <>
            <a href={linkCurso} target="_blank">
            {/* <a href="https://1drv.ms/b/s!AiGeBBzH0Zjfoutdf4eT7Rk01k8jTA?e=IyjLk1" target="_blank"> */}
                <div className="bg-slate-200 h-24 w-60 p-4 flex shadow-lg items-center justify-center rounded-2xl hover:bg-white">
                    <div>
                        <h1>{tituloCursos}</h1>
                    </div>
                    <div className="">
                        <CiShare1  className="text-3xl"/>
                    </div>
                </div>
            </a>
        </>
    )
}

export default CursosCard