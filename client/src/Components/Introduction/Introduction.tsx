


export default function Introduction() {
    const careerInfo = [
        { id: 1, title: "YEARS OF EXPERIENCE", value: "+0" },
        { id: 2, title: "PROJECTS COMPLETED", value: "+3" },
        // { title: "SATISFIED CLIENTS", value: "0" },
    ]
    const layersIcon:string = "/icons/layers.png"
    const rightIcon:string = "/icons/right.png"

    return(
        <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-10 xl:gap-15">
            {/* Introduction */}
            <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-4">
                <h1 className="font-poppins tracking-tight text-center xl:text-start text-[47px] xl:text-[105px] leading-none text-white font-extrabold">SOFTWARE<br/><span className="text-neutral-800">ENGINEER</span></h1>
                <p className="text-neutral-500 text-center xl:text-start leading-snug xl:text-[17px] font-semibold">I build beautifully crafted products that prioritize the end user. From architecting the database to polishing the UI, my focus is on transforming complex requirements into engaging, intuitive, and highly functional digital experiences.</p>
            </div>
            {/* Career Information */}
            <div className="flex flex-row items-start justify-center xl:justify-start w-full h-auto gap-10">
                {careerInfo.map((info) => (    
                    <div key={info.id} className="flex flex-col items-center xl:items-start justify-start w-35 h-auto">
                        <h2 className="text-white text-[50px] font-bold">{info.value}</h2>
                        <p className="text-neutral-500 text-center xl:text-start text-[15px] font-semibold leading-tight">{info.title}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-between w-full h-45 xl:h-15 p-5 gap-2 xl:gap-5 bg-purple-300 rounded-xl">
                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start gap-2 xl:gap-5">
                    <img src={layersIcon} alt="Apps" className="h-8 w-auto" draggable={false} />
                    <h2 className="text-lg font-medium">React, TailwindCSS, Node.js, Express, PostgreSQL</h2>
                </div>
                <button className="h-10 xl:h-8 w-full xl:w-8 border-2 xl:rounded-lg p-1 hover:bg-white/50 hover:scale-105 transition-all duration-200 bg-white xl:bg-transparent">
                    <img src={rightIcon} alt="Apps" className="hidden xl:block h-full w-auto" draggable={false} />
                    <p className="text-md xl:hidden block">View Portfolio</p>
                </button>
            </div>
        </div>
    )
}