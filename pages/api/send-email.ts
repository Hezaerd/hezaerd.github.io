import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/templates/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);
const to_email = process.env.TO_EMAIL || '';
const from_email = process.env.FROM_EMAIL || '';

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
    ) {
    const { from, subject, message } = req.body;
    
    try {
        const response = await resend.emails.send({
            from: from_email,
            to: to_email, 
            subject: subject,
            text: '', /* This will be ignored */
            react: EmailTemplate({
                from: from? from : 'No from provided',
                content: message? message : 'No message provided'
            })
        });

        res.status(200).json({ success: true, response})
    }
    catch (error) {
        res.status(500).json({ success: false, error })
    }
};