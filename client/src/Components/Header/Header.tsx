
import NavButton from "@/Components/Header/Nav-Button"


export default function Header(): any {
    const headerLinks = [
        { name: "Home", icon: "/icons/home.png", url: "introduction" },
        { name: "Projects", icon: "/icons/folder.png", url: "recent-projects" },
        { name: "Experience", icon: "/icons/briefcase.png", url: "experience" },
        { name: "Tools", icon: "/icons/wrench.png", url: "tools" },
        { name: "About", icon: "/icons/about.png", url: "about" },
    ]

    return (
        <div className="fixed self-center mt-8 flex flex-row items-center justify-center w-auto gap-9 xl:gap-8 z-50 py-4 xl:py-3.5 px-6.5 bg-neutral-900 xl:rounded-2xl rounded-2xl shadow-[0_0_3px_1px_#000]">
            {headerLinks.map((link, index) => (
                <NavButton linkIcon={link.icon} linkName={link.name} linkUrl={link.url} key={index} />
            ))}
        </div>
    )
}