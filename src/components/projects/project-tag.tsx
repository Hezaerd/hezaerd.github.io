import React, {FC} from "react";

interface ProjectTagProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: boolean;
}

const ProjectTag: FC<ProjectTagProps> = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? "text-white border-primary-500 shadow-md shadow-purple-500/25"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
    
    return (
        <button
            onClick={() => onClick(name)}
            className={`border-2 rounded-full px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
        >
            {name}
        </button>
    );
}

export default ProjectTag;