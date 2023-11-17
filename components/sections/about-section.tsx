import React, {useState, useTransition} from "react";
import Image from "next/image";
import TabButton from "../tab/tab-button";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>C++ / C / C#</li>
                <li>Visual Studio</li>
                <li>Unreal Engine</li>
                <li>Unity</li>
                <li>Git & Perforce</li>
                <li>Trello & Asana</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Isart Digital Paris - 2023/present</li>
                <li>Isart Digital Montréal - 2021/2023</li>
                {/* <li>French High School - far too long/2021</li> */}

            </ul>
        ),
    }
];

export default function About_Section() {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
                <Image src="/images/about-image.png" alt="About me" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-white texxt-base md:text-lg">
                        I am a game developer with a passion for programming and video games. 
                        I am currently studying at Isart Digital Paris to become a game programmer.
                        I am looking for an internship in a game studio to learn more about the industry and improve my skills.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
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