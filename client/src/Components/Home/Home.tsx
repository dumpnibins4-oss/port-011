import Profile from "@/Components/Profile/Profile"
import Introduction from "@/Components/Introduction/Introduction"

export default function Home() {
    
    return (
        <div className="relative flex flex-col md:flex-row items-center xl:items-start justify-center xl:justify-end w-full h-auto xl:px-50 xl:gap-0 gap-15 px-5">
            <Profile />

            <div className="flex flex-col items-center xl:items-start justify-start w-full xl:w-173 min-h-screen">
                <Introduction />
            </div>
        </div>
    )
}