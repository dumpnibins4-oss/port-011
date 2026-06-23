
export default function Profile() {
    const profileImage: string = "/assets/profile-picture-2.jpg"

    const links = [
        { image: "/icons/github.png", url: "https://github.com/dumpnibins4-oss" },
        { image: "/icons/linkedin.png", url: "https://www.linkedin.com/in/vince-salenga-03758329a" },
        { image: "/icons/instagram.png", url: "https://www.instagram.com/vincxzss/" },
        { image: "/icons/facebook.png", url: "https://www.facebook.com/vince.salenga.3/" },
    ]

    return (
        <>
            <div className="md:absolute md:left-50 flex flex-col items-center justify-center xl:justify-start w-75 xl:w-80 h-full">
                <div className="xl:sticky flex items-center justify-center top-10 w-full h-125">
                    <div className="md:absolute w-full h-full md:left-1/2 md:-translate-x-1/2 flex flex-col items-start justify-between p-0 rounded-[3rem] bg-[#dde3e6]
                    ring-[5px] ring-white">
                        <div className="flex items-center justify-center rounded-[3rem] overflow-hidden">
                            <img src={profileImage} alt="Profile" className="h-full w-auto" draggable={false} />
                        </div>

                        <div className="flex flex-col items-start justify-start gap-2 px-5">
                            <h2 className="text-2xl text-neutral-900 font-bold">Vince Salenga</h2>
                            <p className="leading-tight text-[14px] text-zinc-500 font-semibold text-start font-geist-sans">
                                Software Engineer specializing in high impact, user centric applications.
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full h-10 gap-3 mb-5 px-5">
                            {links.map((link) => (
                                <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.url} className="w-10 h-10 hover:bg-zinc-500/30 p-2 rounded-md transition-all">
                                    <img src={link.image} alt="Link Icon" className="w-full h-full" />
                                </a>
                            ))}
                            <div className="h-8 w-0 border border-black rounded-full"></div>
                            <button className="relative w-10 h-10 hover:bg-zinc-500/30 p-2 rounded-md transition-all cursor-pointer group">
                                <img src={"/icons/download.png"} alt="Download Icon" className="w-full h-full" />
                                <div className="absolute opacity-0 group-hover:opacity-100 flex group-hover:flex-col items-center justify-center top-11 transition-all ease-in-out left-1/2 -translate-x-1/2 -translate-y-2 group-hover:translate-y-0 bg-zinc-800 text-zinc-300 text-xs rounded py-1 px-2 whitespace-nowrap pointer-events-none">
                                    <span className="text-sm text-zinc-300">Download Resume</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}