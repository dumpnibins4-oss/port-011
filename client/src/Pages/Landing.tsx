
import Header from '@/Components/Header/Header'
import Home from '@/Components/Home/Home'
import StarShower from '@/Components/StarShower/StarShower'

export default function Landing(): any {
    return (
        <>
            <div className="relative flex w-full flex-1 flex-col items-start justify-start gap-10 bg-zinc-950 overflow-x-hidden xl:gap-15 h-full">
                <StarShower />
                {/* Header */}
                <Header />
                {/* Home */}
                <Home />
            </div>
        </>
    )
}
