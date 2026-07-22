
import Header from '@/Components/Header/Header'
import Home from '@/Components/Home/Home'

export default function Landing(): any {
    return (
        <>
            <div className="flex w-full flex-1 flex-col items-start justify-start gap-10 bg-neutral-950 overflow-x-hidden xl:gap-15">
                {/* Header */}
                <Header />
                {/* Home */}
                <Home />
            </div>
        </>
    )
}