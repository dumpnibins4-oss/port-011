
interface NavButtonProps {
    linkIcon: string;
    linkName: string;
}

export default function NavButton({ linkIcon, linkName }: NavButtonProps) {
    const linkRel = "/" + linkName.toLowerCase()

    return (
        <>
            <a href={linkRel} className="relative flex items-center justify-center group">
                <img src={linkIcon} alt={linkName} className="xl:w-5 xl:h-5 h-4.5 w-4.5 invert-50 group-hover:invert-100 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute opacity-0 group-hover:opacity-100 flex group-hover:flex-col items-center justify-center top-10 transition-all ease-in-out duration-300 left-1/2 -translate-x-1/2 -translate-y-2 group-hover:translate-y-0 bg-neutral-900 text-zinc-300 text-xs rounded-lg py-1 px-2 whitespace-nowrap pointer-events-none">
                    <span className="text-sm text-zinc-300">{linkName}</span>
                </div>
            </a>
        </>
    )
}