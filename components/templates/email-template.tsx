import React, {FC} from "react";

interface EmailTemplateProps {
    content: string;
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({content}) => (
    <div>
        <p>{content}</p>
    </div>
)