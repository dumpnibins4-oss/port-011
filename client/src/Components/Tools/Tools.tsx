import { useState, useEffect } from "react"
import toolsData from "./Tools.json"

export default function Tools() {
    const [visibleCount, setVisibleCount] = useState(6)
    
    // Tracks the item count limit before the user presses "View More"
    const [initialBatchCount, setInitialBatchCount] = useState(6)
    const sortIcon: string = "/icons/sort.png"

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768
            
            // Only update counts if the user hasn't expanded the list yet
            if (visibleCount <= 6) {
                const defaultLimit = mobile ? 3 : 6
                setVisibleCount(defaultLimit)
                setInitialBatchCount(defaultLimit)
            }
        }
        
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [visibleCount])

    const viewMore = () => {
        setVisibleCount(toolsData.length) 
    }

    return (
        <div id="tools" className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-10 md:px-30 xl:gap-5 px-2 xl:px-0">
            {/* Header */}
            <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-4 md:px-50 xl:px-0">
                <h1 className="font-poppins tracking-tight text-center xl:text-start text-[40px] md:text-[70px] xl:text-[80px] leading-none text-[#dde3e6] font-extrabold">BUILDING<br/><span className="text-neutral-700">TOOLS</span></h1>
            </div>

            {/* Tools mapping */}
            <div className="flex flex-col items-center justify-start w-full h-auto gap-2">
                <div className="flex flex-col md:grid md:grid-cols-3 xl:grid-cols-2 w-full h-auto gap-2">
                    {toolsData.slice(0, visibleCount).map((tool, index) => {
                        // Checks if this tool card was rendered because of the "View More" click
                        const isNewlyRevealed = index >= initialBatchCount

                        return (
                            <a 
                                key={index} 
                                href={tool.url}
                                target="_blank"
                                className={`flex flex-row w-full h-25 gap-5 items-center justify-start py-5 px-2 xl:p-5 rounded-lg hover:bg-neutral-900 transition duration-200 hover:scale-102 cursor-pointer
                                    ${isNewlyRevealed ? 'animate-fade-in-top' : ''}
                                `}
                            >
                                <div className="flex items-center justify-center aspect-square h-full bg-white rounded-lg overflow-hidden ring-2 ring-white p-3">
                                    <img src={tool.imgPath} alt={tool.title} className="w-full h-full object-cover"/>
                                </div>
                                <div className="flex flex-col items-start justify-between flex-1 h-full">
                                    <h2 className="text-20px lg:text-[25px] text-[#dde3e6] font-bold">{tool.title}</h2>
                                    <p className="text-sm lg:text-[16px] text-[#a0a0a0]">{tool.description}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>

                {toolsData.length > visibleCount ?
                    <div className="flex flex-row items-center justify-center w-full h-auto">
                        <button 
                            onClick={viewMore} 
                            className="flex flex-row items-center justify-center gap-2 text-neutral-500 text-md font-medium cursor-pointer hover:text-white transition duration-200 w-auto text-center group"
                        >
                            View More
                            <img src={sortIcon} alt="Link Icon" className="w-5 h-5 invert-50 group-hover:invert-100 transition-all duration-200" />
                        </button>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}
