
import Header from '@/Components/Header/Header'
import Home from '@/Components/Home/Home'

export default function Landing(): any {
    return (
        <>
            <div className="flex flex-col items-start justify-start bg-neutral-950 min-h-screen w-full gap-10 xl:gap-20">
                {/* Header */}
                <Header />
                {/* Home */}
                <Home />
            </div>
        </>
    )
}