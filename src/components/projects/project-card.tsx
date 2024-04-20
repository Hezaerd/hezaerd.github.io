import React, {FC, useState} from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
    name: string;
    description: string;
    imgUrl: string;
    releaseLink: string;
    sourcesLink: string;
}

const ProjectCard: FC<ProjectCardProps> = ({name, description, imgUrl, releaseLink, sourcesLink}) => {
    const [haveRelease, setHaveRelease] = useState(releaseLink !== "#");
    const [haveSources, setHaveSources] = useState(sourcesLink !== "#");

    imgUrl = imgUrl === "" ? "https://via.placeholder.com/200x300" : imgUrl;

    return (
        <div className="group hover:shadow-xl hover:shadow-pink-500/20">
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                aria-label={name}
                style={{ background: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '225px'}}
            >
                <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
                    {haveRelease && <a
                        href={releaseLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link"
                    >
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </a>}
                    {haveSources && <a
                        href={sourcesLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </a>}
                </div>
            </div>
                <div className="bg-[#181818] rounded-b-xl py-6 px-4 ">
                    <h5 className="font-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r 
                    from-primary-500 to-secondary-500
                    group-hover:from-secondary-500 group-hover:to-primary-500">
                        {name}
                    </h5>
                    <p className="text-[#ADB7BE]">{description}</p>
                </div>
        </div>
    );
}

export default ProjectCard;