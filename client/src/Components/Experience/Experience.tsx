import experienceData from "./experience.json"

export default function Experience() {
    const linkArrow: string = "/icons/link-arrow.png"

    return (
        <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-10 md:px-30 xl:gap-5 px-2 xl:px-0">
            {/* Header */}
            <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-4 md:px-50 xl:px-0">
                <h1 className="font-poppins tracking-tight text-center xl:text-start text-[40px] md:text-[70px] xl:text-[80px] leading-none text-[#dde3e6] font-extrabold">OVERALL<br/><span className="text-neutral-700">EXPERIENCE</span></h1>
            </div>

            <div className="flex flex-col items-start justify-start w-full h-auto gap-10 xl:gap-0">
            {/* Experience Mapping */}
                { experienceData.toReversed().map((exp) => 
                    <a className="flex flex-row items-start justify-between w-full h-auto xl:h-47 xl:p-5 hover:bg-white/5 hover:scale-101 cursor-pointer transition duration-200 rounded-2xl group gap-4">
                        <div className="flex flex-col w-full xl:w-4/5 h-full items-start justify-between gap-3">
                            <h2 className="text-white text-xl font-bold">{exp.title}</h2>
                            <div className="flex flex-row items-start justify-start w-full h-auto gap-2">
                                <p className="xl:flex hidden text-neutral-400 text-md font-medium">-</p>
                                <p className="text-neutral-400 font-medium text-md">
                                    {exp.overview}
                                </p>
                            </div>
                            <h3 className="text-neutral-400 font-medium">{exp.duration}</h3>
                        </div>
                        <div className="relative hidden xl:flex flex-col items-end justify-start w-1/5 h-full">
                            <img src={linkArrow} alt="Link Icon" className="absolute h-5 w-auto invert group-hover:translate-x-3 group-hover:-translate-y-3 transition duration-200" />
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}