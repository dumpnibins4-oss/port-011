import educData from "./educ.json"

export default function About() {
    const linkIcon: string = "/icons/link-arrow.png"
    
    return(
        <>
            <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-10 md:px-30 xl:gap-5 px-2 xl:px-0">
                {/* Header */}
                <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-4 md:px-50 xl:px-0">
                    <h1 className="font-poppins tracking-tight text-center xl:text-start text-[40px] md:text-[70px] xl:text-[80px] leading-none text-[#dde3e6] font-extrabold">PROFESSIONAL<br/><span className="text-neutral-700">CREDENTIALS</span></h1>
                </div>

                {/* Educational Information */}
                <div className="flex flex-col w-full h-auto gap-2 items-start justify-start">
                    <div className="flex flex-col items-start justify-start w-full h-auto gap-4">
                        <div className="flex flex-row items-center justify-center w-full h-auto">
                            <h2 className="text-white text-2xl font-bold">Educational Attainment</h2>
                        </div>

                        {/* Educational Background mapping */}
                        <div className="flex flex-col items-start justify-start w-full h-auto gap-4 xl:gap-2">
                            { educData.map((educ) => (
                                <a className="flex flex-row items-start justify-start w-full h-auto gap-2 p-0 xl:p-3 rounded-lg backdrop-blur-sm hover:bg-neutral-800/50 hover:scale-102 transition-all duration-200 cursor-pointer group">
                                    <div className="flex flex-col items-start justify-start w-full h-auto gap-2">
                                        <h2 className="text-white text-md font-medium xl:text-lg xl:font-bold">{educ.degree}</h2>
                                        <div className="flex flex-row items-center justify-start w-full h-auto gap-2">
                                            <p className="xl:flex hidden text-neutral-400 text-md font-medium">-</p>
                                            <p className="text-neutral-400 font-medium text-md">
                                                {educ.school}
                                            </p>
                                        </div>
                                        <h3 className="text-neutral-400 font-medium">{educ.duration}</h3>
                                    </div>
                                    <img src={linkIcon} alt="Link Icon" className="hidden xl:block w-5 h-5 invert-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-200" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}