import toolsData from "./Tools.json";

export default function Tools() {    
    return(
        <>
            <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-10 md:px-30 xl:gap-5 px-2 xl:px-0">
                {/* Header */}
                <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-4 md:px-50 xl:px-0">
                    <h1 className="font-poppins tracking-tight text-center xl:text-start text-[40px] md:text-[70px] xl:text-[80px] leading-none text-[#dde3e6] font-extrabold">BUILDING<br/><span className="text-neutral-700">TOOLS</span></h1>
                </div>

                {/* Tools mapping */}
                <div className="flex flex-col xl:grid grid-cols-2 w-full h-auto gap-2">
                    {toolsData.map((tool) => (
                        <a href="#" className="flex flex-row w-full h-25 gap-5 items-center justify-start py-5 px-2 xl:p-5 rounded-lg hover:bg-neutral-900 transition duration-200 hover:scale-102 cursor-pointer">
                            <div className="flex items-center justify-center aspect-square h-full bg-white rounded-lg overflow-hidden ring-2 ring-white p-3">
                                <img src={tool.imgPath} alt={tool.title} className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex flex-col items-start justify-between flex-1 h-full">
                                <h2 className="text-[25px] text-[#dde3e6] font-bold">{tool.title}</h2>
                                <p className="text-sm xl:text-[16px] text-[#a0a0a0]">{tool.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}