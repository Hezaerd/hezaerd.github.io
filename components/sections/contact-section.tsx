import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";

import GithubIcon from "@/public/images/icons/github-icon.svg";
import LinkedInIcon from "@/public/images/icons/linkedin-icon.svg";

const strings = {
    title: "Let's Connect",
    description:
        "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    email: "Your email",
    subject: "Subject",
    message: "Message",
    send: "Send message",
};

const Contact_Section = () => {
    const [formState, setFormState] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const resetForm = () => {
        setFormState({
            email: "",
            subject: "",
            message: "",
        });
    }

    const successToast = () => {
        toast.success(
            'Email sent successfully!',
            {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            }
        );
    }

    const errorToast = () => {
        toast.error(
            'Email failed to send!',
            {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            }
        );
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const from = formState.email;
        const subject = formState.subject;
        const message = formState.message;

        fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                from: from, 
                subject: subject, 
                message: message 
            }),
        })
        .then(res => {
            if (res.status === 200) {
                console.log('Email sent successfully');
                successToast();
                resetForm();
            } else {
                console.log('Email failed to send');
                errorToast();
            }
        })
        .catch(err => {
            console.error('An error occurred:', err);
            errorToast();
        });

    }

    return (
        <section 
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
            <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="z-10">
                    <h5 className="text-xl font-bold text-white my-2">{strings.title}</h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">{strings.description}</p>
                    <div className="socials flex flex-row gap-2">
                        <Link href="https://github.com/Hezaerd" target="_blank" rel="noopener noreferrer">
                            <Image src={GithubIcon} alt="Github Icon"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/swann-rouanet-7aa979239/" target="_blank" rel="noopener noreferrer">
                            <Image src={LinkedInIcon} alt="LinkedIn Icon"/>
                        </Link>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="emailInput"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                {strings.email}
                            </label>
                            <input
                                id="emailInput"
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                                placeholder="jacob473@ubisoft.com"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subjectInput"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                {strings.subject}
                            </label>
                            <input
                                id="subjectInput"
                                type="text"
                                name="subject"
                                value={formState.subject}
                                onChange={handleChange}
                                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="messageInput"
                                className="block mb-2 text-sm font-medium text-white"
                            >
                                {strings.message}
                            </label>
                            <textarea
                                id="messageInput"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                            >
                                {" "} {strings.send} {" "}
                            </button>
                        </div>
                    </form>
                </div>
        </section>
    );
}

export default Contact_Section;