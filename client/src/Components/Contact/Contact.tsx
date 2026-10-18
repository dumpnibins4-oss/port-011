import { useState, useEffect } from "react"
import { Alert, AlertTitle, AlertDescription } from "../../../@/components/ui/alert"
import projectTypeData from "./projectType.json"
import budgetData from "./budget.json"
import { AlertTriangle } from "lucide-react"
import { CheckCircle } from "lucide-react"

export default function Contact() {
    const downChevron: string = "/icons/down.png"

    const [PTDValue, setPTDValue] = useState<string>("")
    const [BDValue, setBDValue] = useState<string>("")
    const [nameValue, setNameValue] = useState<string>("")
    const [emailValue, setEmailValue] = useState<string>("")
    const [messageValue, setMessageValue] = useState<string>("")
    const [showProjectTypeDropdown, setShowProjectTypeDropdown] = useState<boolean>(false)
    const [showBudgetDropdown, setShowBudgetDropdown] = useState<boolean>(false)

    const [loading, setLoading] = useState<boolean>(false)

    const [success, setSuccess] = useState<string>("")
    const [isSuccessVisible, setIsSuccessVisible] = useState<boolean>(false)

    const [error, setError] = useState<string>("")
    const [isVisible, setIsVisible] = useState<boolean>(false)

    // Submit Handler
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        if (!nameValue || !emailValue || !messageValue || !PTDValue || !BDValue) {
            setLoading(false)
            setError("Please fill in all the fields and try again.")
            return
        }
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: nameValue,
                    email: emailValue,
                    projectType: PTDValue,
                    budget: BDValue,
                    message: messageValue
                }),
            })
            
            const data = await response.json()
            
            if (response.ok && data.success) {
                setSuccess("Message sent successfully! We will get back to you soon.")
                setNameValue("")
                setEmailValue("")
                setPTDValue("")
                setBDValue("")
                setMessageValue("")
            } else {
                setError(data.error || "Failed to parse submission.")
            }
        } catch (error) {
            setError("Failed to reach backend server.")
        } finally {
            setLoading(false)
        }
    }

    // Error Auto-dismiss Timer Logic
    useEffect(() => {
        if (error) {
            setIsVisible(true)

            const animationTimer = setTimeout(() => {
                setIsVisible(false)
            }, 3000)

            const unmountTimer = setTimeout(() => {
                setError("")
            }, 3300)
        
            return () => {
                clearTimeout(animationTimer)
                clearTimeout(unmountTimer)
            }
        }
    }, [error])

    // Success Auto-dismiss Timer Logic
    useEffect(() => {
        if (success) {
            setIsSuccessVisible(true)

            const animationTimer = setTimeout(() => {
                setIsSuccessVisible(false)
            }, 3000)

            const unmountTimer = setTimeout(() => {
                setSuccess("")
            }, 3300)
        
            return () => {
                clearTimeout(animationTimer)
                clearTimeout(unmountTimer)
            }
        }
    }, [success])

    // Toggle Project Type Dropdown
    const togglePTD = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        showProjectTypeDropdown ? setShowProjectTypeDropdown(false) : setShowProjectTypeDropdown(true)
        showBudgetDropdown ? setShowBudgetDropdown(false) : null
    }
    
    // Toggle Budget Dropdown
    const toggleBD = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        showBudgetDropdown ? setShowBudgetDropdown(false) : setShowBudgetDropdown(true)
        showProjectTypeDropdown ? setShowProjectTypeDropdown(false) : null
    }

    // Project Type Dropdown Value Handler
    const handleSelectProjectType = (e: React.MouseEvent<HTMLButtonElement>, projectType: string) => {
        e.preventDefault()
        setPTDValue(projectType)
        setShowProjectTypeDropdown(false)
    }

    // Budget Dropdown Value Handler
    const handleBudget = (e: React.MouseEvent<HTMLButtonElement>, budget: string) => {
        e.preventDefault()
        setBDValue(budget)
        setShowBudgetDropdown(false)
    }

    return(
        <>
            <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-10 md:px-30 xl:gap-5 px-2 xl:px-0 mb-10">
                {/* Header */}
                <div className="flex flex-col items-center xl:items-start justify-start w-full h-auto gap-4 md:px-50 xl:px-0">
                    <h1 className="font-poppins tracking-tight text-center xl:text-start text-[40px] md:text-[70px] xl:text-[80px] leading-none text-[#dde3e6] font-extrabold">LET'S WORK<br/><span className="text-neutral-700">TOGETHER</span></h1>
                </div>

                {/* Form Error Pop-up */}
                {error && (
                    <div 
                        className={`fixed left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-auto md:right-5 z-50 w-full max-w-xl px-4 transition-all duration-300 ease-in-out
                        ${isVisible 
                            ? "top-24 xl:top-4 opacity-100 scale-100"
                            : "-top-20 opacity-0 scale-95 pointer-events-none"
                        }`}
                    >
                        <Alert variant="destructive" className="border-neutral-800 bg-[#161616] text-[#ff6363]">
                            <AlertTriangle className="text-[#ff6363]" />
                            <AlertTitle className="font-semibold text-[#ff6363]">Payment failed</AlertTitle>
                            <AlertDescription className="text-neutral-400">
                                {error}
                            </AlertDescription>
                        </Alert>
                    </div>
                )}

                {/* Form Success Pop-up */}
                {success && (
                    <div 
                        className={`fixed left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-auto md:right-5 w-full px-4 transition-all duration-300 ease-in-out
                        ${isSuccessVisible 
                            ? "top-24 xl:top-4 opacity-100 scale-100"
                            : "-top-20 opacity-0 scale-95 pointer-events-none"
                        }`}
                    >
                        {/* Using your exact shadcn components with green color styling */}
                        <Alert className="border-neutral-800 bg-[#161616] text-[#4ade80]">
                            <CheckCircle className="text-[#4ade80]" />
                            <AlertTitle className="font-semibold text-[#4ade80]">Submission successful</AlertTitle>
                            <AlertDescription className="text-neutral-400">
                                {success}
                            </AlertDescription>
                        </Alert>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start w-full h-auto gap-4">

                    {/* Row 1 */}
                    <div className="flex flex-col md:grid grid-cols-2 gap-2 md:gap-4 w-full h-auto">

                        {/* Name Input */}
                        <div className="flex flex-col items-start justify-start w-full h-auto gap-1">
                            <label htmlFor="name" className="text-xs text-neutral-400 ml-1 font-semibold">Name</label>
                            <input value={nameValue} onChange={(e) => setNameValue(e.target.value)} type="text" id="name" placeholder="Your Name" className="w-full h-10 rounded-xl py-2 px-3 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300" />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col items-start justify-start w-full h-auto gap-1">
                            <label htmlFor="email" className="text-xs text-neutral-400 ml-1 font-semibold">Email</label>
                            <input value={emailValue} onChange={(e) => setEmailValue(e.target.value)} type="email" id="email" placeholder="Your@email.com" className="w-full h-10 rounded-xl py-2 px-3 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:grid grid-cols-2 gap-4 w-full h-auto">

                        {/* Project Type Dropdown */}
                        <div className="relative flex flex-col items-start justify-start w-full h-auto gap-1">
                            <label htmlFor="name" className="text-xs text-neutral-400 ml-1 font-semibold">Project Type</label>
                            <button type="button" onClick={togglePTD} className="flex flex-row items-center justify-between w-full h-10 rounded-xl py-2 px-3 bg-neutral-800 text-white focus:outline-none focus:border-white/50 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#E0F3FA66]">
                                <span className="text-md text-neutral-400 ml-1">{PTDValue === "" ? "Select Project Type" : PTDValue}</span>
                                <img src={downChevron} alt="Down Chevron" className="w-4 h-4 object-contain invert-60" />
                            </button>

                            {/* Floating Project Types Selection */}
                            <div className={`${showProjectTypeDropdown ? `absolute` : `hidden`} z-50 top-full mt-2 left-0 flex flex-col items-start justify-start w-full h-auto p-1 gap-2 bg-neutral-800 rounded-xl shadow-black/50 shadow-md ring-1 ring-neutral-800`}>
                                <button className="w-full h-full py-2 px-3 text-start text-neutral-500 cursor-not-allowed rounded-xl">
                                    Select Project Type...
                                </button>

                                {/* Map Project Type Selections */}
                                { projectTypeData.map((projectType, index) => (
                                    <button key={index} type="button" onClick={(e) => handleSelectProjectType(e, projectType.value)} className="w-full h-full py-2 px-3 text-start text-neutral-400 hover:bg-neutral-700 hover:ring-2 hover:ring-neutral-700 cursor-pointer rounded-xl transition-all duration-200">
                                        {projectType.value}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        {/* Budget Dropdown */}
                        <div className="relative flex flex-col items-start justify-start w-full h-auto gap-1">
                            <label htmlFor="email" className="text-xs text-neutral-400 ml-1 font-semibold">Budget</label>
                            <button type="button" onClick={toggleBD} className="flex flex-row items-center justify-between w-full h-10 rounded-xl py-2 px-3 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-none transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#E0F3FA66]">
                                <span className="text-md text-neutral-400 ml-1">{BDValue === "" ? "Select..." : BDValue}</span>
                                <img src={downChevron} alt="Down Chevron" className="w-4 h-4 object-contain invert-60" />
                            </button>

                            {/* Floating Bugdet Selections */}
                            <div className={`${showBudgetDropdown ? `absolute` : `hidden`} z-50 top-full mt-2 left-0 flex flex-col items-start justify-start w-full h-auto p-1 gap-2 bg-neutral-800 rounded-xl shadow-black/50 shadow-md ring-1 ring-neutral-800`}>
                                <button className="w-full h-full py-2 px-3 text-start text-neutral-500 cursor-not-allowed rounded-xl">
                                    Select...
                                </button>

                                {/* Map Project Type Selections */}
                                { budgetData.map((budget, index) => (
                                    <button key={index} type="button" onClick={(e) => handleBudget(e, budget.value)} className="w-full h-full py-2 px-3 text-start text-neutral-400 hover:bg-neutral-700 hover:ring-2 hover:ring-neutral-700 cursor-pointer rounded-xl transition-all duration-200">
                                        {budget.value}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col items-start justify-start w-full h-auto gap-1">
                        <label htmlFor="message" className="text-xs text-neutral-400 ml-1 font-semibold">Message</label>
                        <textarea value={messageValue} onChange={(e) => setMessageValue(e.target.value)} className="w-full h-25 rounded-xl py-2 px-3 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300" placeholder="Your message here..." />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        disabled={loading} 
                        className="flex items-center justify-center w-full h-10 bg-white text-black rounded-xl font-bold transition-all duration-200 enabled:cursor-pointer enabled:hover:bg-neutral-300 disabled:bg-neutral-600 disabled:text-neutral-400 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <div className="flex flex-row items-center justify-center gap-2">
                                {/* Lucide Spinner Icon with Tailwind's animate-spin utility */}
                                <svg className="animate-spin h-5 w-5 text-neutral-400" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Sending Email...</span>
                            </div>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
        </>
    )
}