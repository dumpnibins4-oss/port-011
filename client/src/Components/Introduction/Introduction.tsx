


export default function Introduction() {
    const careerInfo = [
        { id: 1, title: "YEARS OF EXPERIENCE", value: "+0" },
        { id: 2, title: "PROJECTS COMPLETED", value: "+3" },
        // { title: "SATISFIED CLIENTS", value: "0" },
    ]
    
    const codeIcon:string = "/icons/code.png"
    const rightIcon:string = "/icons/right.png"
    const cardBg:string = "/assets/card-bg.png"

    return(
        <div id="introduction" className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-10 xl:gap-10 px-2 xl:px-0 md:px-30">
            {/* Introduction */}
            <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-4 xl:px-0">
                <h1 className="font-poppins tracking-tight text-center xl:text-start text-[40px] md:text-[70px] xl:text-[100px] leading-none text-[#dde3e6] font-extrabold">SOFTWARE<br/><span className="text-neutral-700">ENGINEER</span></h1>
                <p className="text-neutral-500 text-center xl:text-start leading-snug md:text-[20px] xl:text-[17px] font-semibold">I build beautifully crafted products that prioritize the end user. From architecting the database to polishing the UI, my focus is on transforming complex requirements into engaging, intuitive, and highly functional digital experiences.</p>
            </div>
            {/* Career Information */}
            <div className="flex flex-row items-start justify-center xl:justify-start w-full h-auto gap-10">
                {careerInfo.map((info) => (
                    <div key={info.id} className="flex flex-col items-center xl:items-start justify-start w-35 h-auto">
                        <h2 className="text-[#dde3e6] text-[75px] font-semibold leading-20">{info.value}</h2>
                        <p className="text-neutral-500 text-center xl:text-start text-[15px] font-semibold leading-tight">{info.title}</p>
                    </div>
                ))}
            </div>
            <div className="w-full h-50 flex flex-col items-center justify-center md:grid grid-cols-2 gap-5">
                <div className="relative flex flex-col items-start justify-between w-full h-full p-5 gap-2 md:gap-5 bg-[#00d6ff] rounded-xl overflow-hidden">
                    <img src={cardBg} alt="Apps" className="absolute w-full h-full top-0 left-0 z-1 invert-100" />
                    <div className="flex flex-col items-start justify-center z-2">
                        <img src={codeIcon} alt="Apps" className="h-8 w-auto invert-100" draggable={false} />
                    </div>
                    <div className="flex flex-row items-end justify-between w-full h-auto z-2">
                        <div className="flex flex-col items-start justify-end w-4/5">
                            <h2 className="text-lg font-bold text-white">Recent Projects</h2>
                        </div>
                        <a href="#recent-projects" className="aspect-square w-10 border-3 border-white rounded-lg p-1 hover:bg-white/30 hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center">
                            <img src={rightIcon} alt="Apps" className="h-5 w-auto invert-100" draggable={false} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}