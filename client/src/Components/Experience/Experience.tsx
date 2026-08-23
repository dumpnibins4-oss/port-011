

export default function Experience() {
    const linkArrow: string = "/icons/link-arrow.png"
    const experience = [
        {
            id: 1,
            title: "Absolute Service Inc.",
            overview: "Conversion Programmer responsible for converting legacy software to modern web applications to improve user experience and streamline business operations.",
            duration: "August 2026 - Current",
            url: "",
            restricted: false
        },
        {
            id: 2,
            title: "La Rose Noire, Philippines Inc.",
            overview: "Full-Stack Developer Intern managing the end-to-end lifecycle (PHP, JavaScript, MS SQL) of internal software to optimize business operations.",
            duration: "February 2026 - May 2026",
            url: "",
            restricted: false
        },
    ]

    return (
        <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-10 xl:gap-5 px-2 xl:px-0">
            {/* Header */}
            <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-4 md:px-50 xl:px-0">
                <h1 className="font-poppins tracking-tight text-center xl:text-start text-[40px] md:text-[70px] xl:text-[80px] leading-none text-white font-extrabold">OVERALL<br/><span className="text-neutral-700">EXPERIENCE</span></h1>
            </div>

            <div className="flex flex-col items-start justify-start w-full h-auto gap-10 xl:gap-0">
            {/* Experience Mapping */}
                { experience.map((exp) => 
                    <a className="flex flex-row items-start justify-between w-full h-auto xl:h-47 xl:p-5 hover:bg-white/5 hover:scale-102 cursor-pointer transition duration-200 rounded-2xl group gap-4">
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