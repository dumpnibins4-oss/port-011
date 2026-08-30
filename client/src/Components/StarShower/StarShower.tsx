import type { CSSProperties } from "react"

type StarConfig = {
    id: number
    right: string
    top: string
    size: number
    delay: string
    duration: string
    opacity: number
}

const STAR_COUNT = 48
const STAR_SRC = "/icons/star.png"

function createStars(): StarConfig[] {
    return Array.from({ length: STAR_COUNT }, (_, i) => {
        const n = (i * 7919 + 104729) % 1000
        const durationSec = 2.8 + (n % 40) / 10
        const delaySec = -((n % 120) / 10) % durationSec
        return {
            id: i,
            right: `${(n % 45) + 2}%`,
            top: `${(n % 30) - 8}%`,
            size: 8 + (n % 10),
            delay: `${delaySec.toFixed(1)}s`,
            duration: `${durationSec.toFixed(1)}s`,
            opacity: 0.15 + (n % 70) / 100,
        }
    })
}

const STARS = createStars()

export default function StarShower() {
    return (
        <div
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
            aria-hidden
        >
            {STARS.map((star) => (
                <span
                    key={star.id}
                    className="hero-star absolute"
                    style={
                        {
                            right: star.right,
                            top: star.top,
                            "--star-delay": star.delay,
                            "--star-duration": star.duration,
                            "--star-opacity": star.opacity,
                        } as CSSProperties
                    }
                >
                    <img
                        src={STAR_SRC}
                        alt=""
                        className="invert"
                        draggable={false}
                        style={{ width: star.size, height: star.size }}
                    />
                </span>
            ))}
        </div>
    )
}
