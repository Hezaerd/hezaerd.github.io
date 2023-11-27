"use client";
import React, {useState, useTransition} from "react";
import Image from "next/image";
import TabButton from "../tab/tab-button";
import { motion } from "framer-motion";

const skills_content = ['C++ / C / C#', 'Visual Studio', 'Unreal Engine', 'Unity', 'Git & Perforce', 'Trello & Asana'];
const education_content = ['Isart Digital Paris - 2023/present', 'Isart Digital Montréal - 2021/2023', 'French High School - 2018/2021'];




export default function About_Section() {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <ul key={tab} className="list-disc pl-2">
                    {skills_content.map((skill, index) => (
                        <motion.li 
                            key={index}
                            initial={{ opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="mb-2"
                        >
                                {skill}
                        </motion.li>
                    ))}
                </ul>
            ),
        },
        {
            title: "Education",
            id: "education",
            content: (
                <ul key={tab} className="list-disc pl-2">
                    {education_content.map((education, index) => (
                        <motion.li 
                            key={index}
                            initial={{ opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="mb-2"
                        >
                                {education}
                        </motion.li>
                    ))}
                </ul>
            ),
        }
    ];

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section 
            id="about"
            className="text-white"
        >
            <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
                <Image src="/images/about-image.png" alt="About me" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-white text-base md:text-lg">
                        I am a game developer with a passion for programming and video games. 
                        I am currently studying at Isart Digital Paris to become a game programmer.
                        I am looking for an internship in a game studio to learn more about the industry and improve my skills.
                    </p>
                    <div className="flex flex-row justify-start items-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content || <div>No content available</div>}
                    </div>
                </div>
            </div>
        </section>
    );
}