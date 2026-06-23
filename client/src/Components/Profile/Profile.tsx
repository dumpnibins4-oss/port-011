

function Basketball({ delay = 0 }: { delay?: number }) {
    const animId = `bb-${delay * 10}`
    return (
        <div className="flex flex-col items-center" style={{ position: "relative" }}>
            <style>{`
                @keyframes ${animId}-bounce {
                    0%   { transform: translateY(0px); animation-timing-function: cubic-bezier(0, 0.55, 0.45, 1); }
                    50%  { transform: translateY(-22px); animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45); }
                    100% { transform: translateY(0px); }
                }
                @keyframes ${animId}-spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes ${animId}-squash {
                    0%   { transform: scaleX(1)   scaleY(1);    opacity: 0; }
                    40%  { transform: scaleX(1)   scaleY(1);    opacity: 0; }
                    50%  { transform: scaleX(1.6) scaleY(0.35); opacity: 0.5; }
                    60%  { transform: scaleX(1)   scaleY(1);    opacity: 0; }
                    100% { transform: scaleX(1)   scaleY(1);    opacity: 0; }
                }
                @keyframes ${animId}-wind {
                    0%   { opacity: 0; transform: translateX(6px)  scaleX(0.4); }
                    50%  { opacity: 1; transform: translateX(0px)  scaleX(1); }
                    100% { opacity: 0; transform: translateX(-6px) scaleX(0.4); }
                }
            `}</style>

            {/* Wind trails */}
            <div style={{
                position: "absolute",
                bottom: 6,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                pointerEvents: "none",
            }}>
                {[10, 14, 10].map((w, i) => (
                    <div key={i} style={{
                        width: w,
                        height: 1.5,
                        borderRadius: 99,
                        background: "rgba(0,0,0,0.6)",
                        animation: `${animId}-wind 1.4s ease-in-out infinite`,
                        animationDelay: `${delay + i * 0.07}s`,
                    }} />
                ))}
            </div>

            {/* Ball */}
            <div style={{
                animation: `${animId}-bounce 1.4s infinite`,
                animationDelay: `${delay}s`,
            }}>
                <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    animation: `${animId}-spin 1.6s linear infinite`,
                    animationDelay: `${delay}s`,
                    position: "relative",
                    overflow: "hidden",
                    background: "radial-gradient(circle at 35% 35%, #fb923c, #c2410c)",
                    boxShadow: "inset -3px -3px 6px rgba(0,0,0,0.4), 0 2px 8px rgba(194,65,12,0.5)",
                }}>
                    <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1.5, background: "#7c2d12", transform: "translateY(-50%)" }} />
                    <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1.5, background: "#7c2d12", transform: "translateX(-50%)" }} />
                    <div style={{ position: "absolute", top: "10%", left: "10%", width: "35%", height: "80%", border: "1.5px solid #7c2d12", borderRadius: "50%", borderRight: "none", borderTop: "none" }} />
                    <div style={{ position: "absolute", top: "10%", right: "10%", width: "35%", height: "80%", border: "1.5px solid #7c2d12", borderRadius: "50%", borderLeft: "none", borderTop: "none" }} />
                </div>
            </div>

            {/* Shadow squash */}
            {/* <div style={{
                width: 18,
                height: 5,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.35)",
                marginTop: 2,
                animation: `${animId}-squash 1.4s ease-in-out infinite`,
                animationDelay: `${delay}s`,
            }} /> */}
        </div>
    )
}

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

                        {/* <div className="flex flex-row items-end justify-center gap-5" style={{ height: 56 }}>
                            <Basketball delay={0} />
                            <Basketball delay={0.7} />
                            <Basketball delay={0} />
                        </div> */}

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