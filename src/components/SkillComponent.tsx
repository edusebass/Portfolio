
import  ProgressBar from './ProgressBar';



const SkillComponent = ({color, icon, porcentaje, nombreSkill}:SkillComp) => { 
    return (
        <>
            <div className={`${color} transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-125 duration-1000 p-1 px-3`}>
                {icon}
                <p className="transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110  duration-1000 text-sm text-center text-white">{nombreSkill}</p>
                <ProgressBar percent={porcentaje} />
            </div>
        </>
    )
}

export default SkillComponent