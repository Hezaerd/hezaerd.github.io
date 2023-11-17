import React, { useState } from "react";
import ProjectCard from "./projects/project-card";
import ProjectTag from "./projects/project-tag";

const ProjectData = [
    {
        id: 1,
        name: "HezEngine",
        description: "My personnal game engine",
        tag: ["All", "c++", "game-engine"],
        image: "https://via.placeholder.com/255"
        // image: "/images/projects/hezengine.png"
    },
    {
        id: 2,
        name: "Project 2",
        description: "This is a project description",
        tag: ["All", "Unity", "tag2", "tag3"],
        image: "https://via.placeholder.com/255"
    },
    {
        id: 3,
        name: "Project 3",
        description: "This is a project description",
        tag: ["All", "tag1", "tag2", "tag3"],
        image: "https://via.placeholder.com/255"
    },
    {
        id: 4,
        name: "Project 4",
        description: "This is a project description",
        tag: ["All", "tag1", "tag2", "tag3"],
        image: "https://via.placeholder.com/255"
    },
    {
        id: 5,
        name: "Project 5",
        description: "This is a project description",
        tag: ["All", "tag1", "tag2", "tag3"],
        image: "https://via.placeholder.com/255"
    },
    {
        id: 6,
        name: "Project 6",
        description: "This is a project description",
        tag: ["All", "tag1", "tag2", "tag3"],
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
                    name="c++"
                    onClick={handleTagChange}
                    isSelected={tag === "c++"}
                />
                <ProjectTag
                    name="game-engine"
                    onClick={handleTagChange}
                    isSelected={tag === "game-engine"}
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
                <ProjectTag
                    name="Maths"
                    onClick={handleTagChange}
                    isSelected={tag === "Maths"}
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