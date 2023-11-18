import React, {FC} from "react";
import Image from "next/image";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
}

const ProjectCard: FC<ProjectCardProps> = ({imgUrl, title, description}) => {
    return (
        <div>
            <div
                className="group rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden"
                aria-label={title}
                style={{ background: `url(${imgUrl})`, backgroundSize: "contain" }}
            >
                <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
                    <Link
                        href="/"
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link"
                    >
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </Link>
                    <Link
                        href="/"
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </Link>
                </div>
            <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
                <h5 className="font-lg font-semibold">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    </div>
    );
}

export default ProjectCard;