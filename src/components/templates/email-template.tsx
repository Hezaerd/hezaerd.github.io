import React, {FC} from "react";

interface EmailTemplateProps {
    from: string;
    content: string;
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({from, content}) => (
    <div>
        <p>From: {from}</p>
        
        <div>
            <br />
            <p>{content}</p>
        </div>
    </div>
)