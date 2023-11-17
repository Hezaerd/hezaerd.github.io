import React, { useState } from "react";
import ProjectCard from "../projects/project-card";
import ProjectTag from "../projects/project-tag";

const ProjectData = [
    {
        id: 1,
        name: "HezEngine",
        description: "My personnal game engine",
        tag: ["All", "C++", "game-engine", "Hez"],
        image: "https://via.placeholder.com/255"
        // image: "/images/projects/hezengine.png"
    },
    {
        id: 2,
        name: "CoorsLight Engine",
        description: "This is a project description",
        tag: ["All", "C++", "game-engine"],
        image: "https://via.placeholder.com/999x100"
    },
    {
        id: 3,
        name: "Coloris",
        description: "This is a project description",
        tag: ["All", "C#", "Unity"],
        image: "https://via.placeholder.com/255"
    },
    {
        id: 4,
        name: "Nautikart",
        description: "This is a project description",
        tag: ["All", "C++", "Unreal-Engine"],
        image: "https://via.placeholder.com/255"
    },
    {
        id: 5,
        name: "HezMaths",
        description: "This is a project description",
        tag: ["All", "C++", "Hez"],
        image: "https://via.placeholder.com/255"
    },
    {
        id: 6,
        name: "HezAudio",
        description: "This is a project description",
        tag: ["All", "C++", "Hez"],
        image: "https://via.placeholder.com/255"
    },
];

const Projects_Section = () => {
    const [tag, setTage] = useState("All");

    const filterProjects = ProjectData.filter((project) => 
        project.tag.includes(tag)
    );

    const handleTagChange = (newTag: string) => {
        setTage(newTag);
    }

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
                <ProjectTag
                    name="All"
                    onClick={handleTagChange}
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    name="C++"
                    onClick={handleTagChange}
                    isSelected={tag === "C++"}
                />
                <ProjectTag
                    name="game-engine"
                    onClick={handleTagChange}
                    isSelected={tag === "C#"}
                />
                <ProjectTag
                    name="Unity"
                    onClick={handleTagChange}
                    isSelected={tag === "Unity"}
                />
                <ProjectTag
                    name="Unreal-Engine"
                    onClick={handleTagChange}
                    isSelected={tag === "Unreal-Engine"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filterProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        title={project.name}
                        description={project.description}
                        imgUrl={project.image}
                    />
                ))}
            </div>
        </>
    );
};

export default Projects_Section;