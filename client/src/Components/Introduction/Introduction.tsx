


export default function Introduction() {
    const careerInfo = [
        { id: 1, title: "YEARS OF EXPERIENCE", value: "+0" },
        { id: 2, title: "PROJECTS COMPLETED", value: "+3" },
        // { title: "SATISFIED CLIENTS", value: "0" },
    ]
    const layersIcon:string = "/icons/layers.png"
    const rightIcon:string = "/icons/right.png"

    return(
        <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-10 xl:gap-15 px-2 xl:px-0">
            {/* Introduction */}
            <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-4 md:px-50 xl:px-0">
                <h1 className="font-poppins tracking-tight text-center xl:text-start text-[40px] md:text-[70px] xl:text-[80px] leading-none text-white font-extrabold">SOFTWARE<br/><span className="text-neutral-700">ENGINEER</span></h1>
                <p className="text-neutral-500 text-center xl:text-start leading-snug md:text-[20px] xl:text-[17px] font-semibold">I build beautifully crafted products that prioritize the end user. From architecting the database to polishing the UI, my focus is on transforming complex requirements into engaging, intuitive, and highly functional digital experiences.</p>
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
            <div className="flex flex-col md:flex-row items-center justify-between w-full xl:w-full md:w-3/4 h-45 md:h-15 p-5 gap-2 md:gap-5 bg-white rounded-xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-5">
                    <img src={layersIcon} alt="Apps" className="h-8 w-auto" draggable={false} />
                    <h2 className="text-lg font-medium">Custom Applications | React - Next.js - Tailwind</h2>
                </div>
                <button className="h-10 md:h-8 w-full md:w-8 border-2 md:rounded-lg p-1 hover:bg-white/50 hover:scale-105 transition-all duration-200 bg-black md:bg-transparent">
                    <img src={rightIcon} alt="Apps" className="hidden md:block h-full w-auto" draggable={false} />
                    <p className="text-md md:hidden block text-white">View Portfolio</p>
                </button>
            </div>
        </div>
    )
}