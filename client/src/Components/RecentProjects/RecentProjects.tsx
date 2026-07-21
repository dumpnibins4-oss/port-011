


export default function RecentProjects() {

    const projects = [
        { id: 1, projectImage: "./assets/project-placeholder.png", ProjectName: "Invique", type: "Custom Application",  url: "", restricted: false },
        { id: 1, projectImage: "./assets/project-placeholder.png", ProjectName: "A.C.T.S.", type: "Custom Internal System",  url: "", restricted: false },
        { id: 1, projectImage: "./assets/project-placeholder.png", ProjectName: "I.T.M.S.", type: "Custom Internal System",  url: "", restricted: false },
    ]
    const linkIcon: string = "/icons/link.png"
    const linkIcon2: string = "/icons/link-1.png"

    return(
        <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-10 md:px-30 xl:px-0 xl:gap-5">
            <h1 className="font-poppins tracking-tight text-center xl:text-start text-[40px] md:text-[70px] xl:text-[80px] leading-none text-white font-extrabold">RECENT<br/><span className="text-neutral-700">PROJECTS</span></h1>

            <div className="flex flex-col w-full h-auto items-start justify-start gap-5">
                { projects.map((project) => (    
                    <a href="" className="flex flex-row w-full xl:h-45 h-35 items-start justify-between bg-transparent xl:p-5 p-3 hover:bg-white/5 hover:scale-102 transition-all duration-300 xl:rounded-xl group border border-zinc-800 rounded-2xl xl:border-0">
                        <div className="flex flex-row items-center justify-start flex-1 h-full gap-5">
                            <div className="flex flex-row items-start justify-start aspect-square h-full overflow-hidden rounded-2xl">
                                <img src={project.projectImage} alt="Project" className=" w-full h-full object-cover object-center" draggable={false} />
                            </div>
                            <div className="flex flex-col items-start justify-center w-auto h-full gap-1">
                                <h2 className="text-white text-3xl font-bold">{project.ProjectName}</h2>
                                <p className="text-neutral-500 text-[15px] font-semibold leading-tight">{project.type}</p>
                            </div>
                        </div>
                        <img src={linkIcon} alt="Link Icon" className="h-5 w-auto invert group-hover:rotate-180 transition-all duration-300 hidden xl:block" />
                        <img src={linkIcon2} alt="Link Icon" className="h-4 w-auto invert group-hover:rotate-180 transition-all duration-300 xl:hidden block" />
                    </a>
                ))}
            </div>
        </div>
    )
}