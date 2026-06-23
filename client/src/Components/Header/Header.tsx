
import NavButton from "@/Components/Header/Nav-Button"


export default function Header(): any {
    const headerLinks = [
        { name: "Home", icon: "/icons/home.png" },
        { name: "About", icon: "/icons/about.png" },
        { name: "Projects", icon: "/icons/folder.png" },
        { name: "Experience", icon: "/icons/briefcase.png" },
        { name: "Tools", icon: "/icons/wrench.png" },
    ]

    return (
        <div className="self-center mt-8 flex flex-row items-center justify-center w-auto gap-9 xl:gap-8 z-50 py-4 xl:py-3.5 px-6.5 bg-neutral-900 xl:rounded-2xl rounded-2xl">
            {headerLinks.map((link) => (
                <NavButton linkIcon={link.icon} linkName={link.name} key={link.name} />
            ))}
            {/* <button className="">

            </button> */}
        </div>
    )
}