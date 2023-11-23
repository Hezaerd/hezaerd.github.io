import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/templates/email-template';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { from, to, subject, content } = req.body;

    try {
        const data = await resend.emails.send({
            from: 'Swann - Portfolio <delivered@resend.dev>',
            to: ['goldenland046@gmail.com'],
            subject: subject,
            text: 'Hello world -- WILL NOT BE USED',
            react: EmailTemplate({content: content? content : 'This email is empty'}),
        });

        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).json(error);
    }
};

