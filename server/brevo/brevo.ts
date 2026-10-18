import { BrevoClient } from '@getbrevo/brevo'
import dotenv from 'dotenv'

dotenv.config()

// Brevo API
const brevo = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY || '',
})

interface TransactionalEmailOptions {
    to: string
    subject: string
    html: string
}

export async function sendBrevoEmail({ to, subject, html }: TransactionalEmailOptions) {
    try {
        const result = await brevo.transactionalEmails.sendTransacEmail({
            subject: subject,
            htmlContent: html,
            // Sender MUST match your verified email domain in the Brevo dashboard
            sender: {
                name: "Portfolio Contact Form",
                email: process.env.BREVO_SENDER_EMAIL || "your-verified-email@example.com",
            },
            to: [{ email: to }],
        })

        console.log(`✉️ Brevo API success! Message ID:`, result.messageId)
        return { success: true, messageId: result.messageId }
    } catch (error) {
        console.error('❌ Brevo API failure:', error)
        throw error
    }
}
