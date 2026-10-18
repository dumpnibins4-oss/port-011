import express, { Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import { sendBrevoEmail } from "./brevo/brevo"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
const allowedOrigins = [
    "https://vincxzse.vercel.app",
    "https://vincxzse.vercel.app/",
    "http://localhost:5173",
    "http://localhost:5173/",
]

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true)
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Blocked by CORS"))
        }
    },
    credentials: true
}))

app.post("/api/contact", async(req: Request, res: Response) => {
    const { name, email, projectType, budget, message } = req.body

    if (!name || !email || !projectType || !budget || !message) {
        return res.status(400).json({ error: "Missing required field blocks: name, email, or message." })
    }

    const emailHtml = `
        <!DOCTYPE html>
        <html>
            <body style="font-family: sans-serif padding: 20px color: #333">
                <h2 style="color: #111 border-bottom: 2px solid #eaeaea padding-bottom: 10px">💼 New Lead from Portfolio</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Sender Inbox:</strong> ${email}</p>
                <p><strong>Requested Project Type:</strong> ${projectType || 'Not specified'}</p>
                <p><strong>Stated Budget Bracket:</strong> ${budget || 'Not specified'}</p>
                <div style="margin-top: 20px padding: 15px background: #f9f9f9 border-radius: 8px border: 1px solid #eee">
                <p style="margin: 0 0 10px 0 font-weight: bold">Message:</p>
                <p style="margin: 0 white-space: pre-wrap">${message}</p>
                </div>
            </body>
        </html>
    `

    try {
        await sendBrevoEmail({
            to: process.env.RECEIVER_EMAIL || "",
            subject: `💼 Portfolio Project Lead from ${name}`,
            html: emailHtml,
        })
    
        return res.status(200).json({
            success: true,
            message: "Inquiry successfully dispatched to your email!"
        })
    } catch (error) {
        return res.status(500).json({ error: "Internal mail pipeline failure. Could not parse Brevo dispatcher." })
    }
})

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})