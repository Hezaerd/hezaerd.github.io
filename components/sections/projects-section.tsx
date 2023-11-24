import React, { useState } from "react";
import ProjectCard from "../projects/project-card";
import ProjectTag from "../projects/project-tag";

const ProjectData = [
    {
        id: 1,
        name: "HezEngine",
        description: "My personnal game engine",
        tag: ["All", "C++", "game-engine", "Hez"],
        image: "https://via.placeholder.com/200x300",
        releaseLink: "#",
        sourcesLink: "https://github.com/Hezaerd/HezEngine",
    },
    {
        id: 2,
        name: "CoorsLight Engine",
        description: "Graduation project at Isart Digital Montréal",
        tag: ["All", "C++", "game-engine"],
        image: "https://via.placeholder.com/200x300",
        releaseLink: "#",
        sourcesLink: "https://github.com/gabrielboisvert/CoorsLightEngine",
    },
    {
        id: 3,
        name: "HezMaths",
        description: "Collection of mathemathical tools for rendering",
        tag: ["All", "C++", "Hez"],
        image: "https://via.placeholder.com/200x300",
        releaseLink: "#",
        sourcesLink: "https://github.com/Hezaerd/HezMaths",
    },
    {
        id: 4,
        name: "HezAudio",
        description: "A simple audio library based on OpenAL",
        tag: ["All", "C++", "Hez"],
        image: "https://via.placeholder.com/200x300",
        releaseLink: "#",
        sourcesLink: "#",
    },
    {
        id: 5,
        name: "Coloris",
        description: "This is a project description",
        tag: ["All", "C#", "Unity"],
        image: "/images/projects/5.png",
        releaseLink: "#",
        sourcesLink: "#",
    },
    {
        id: 6,
        name: "Nautikart",
        description: "This is a project description",
        tag: ["All", "C++", "Unreal-Engine"],
        image: "https://via.placeholder.com/200x300",
        releaseLink: "#",
        sourcesLink: "#",
    }
];

const Tags = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "C++",
    },
    {
        id: 3,
        name: "C#",
    },
    {
        id: 4,
        name: "Unity",
    },
    {
        id: 5,
        name: "Unreal-Engine",
    },
    {
        id: 6,
        name: "Hez",
    },
];

const Projects_Section = () => {
    const [currentTag, setTag] = useState("All");

    const filterProjects = ProjectData.filter((project) => 
        project.tag.includes(currentTag)
    );

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    }

    return (
        <section 
        id="projects"
        className="my-8 md:my-12">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
                {Tags.map((tag, index) => (
                    <ProjectTag
                        key={index}
                        name={tag.name}
                        onClick={() => handleTagChange(tag.name)}
                        isSelected={tag.name === currentTag}
                    />
                ))}
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filterProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        imgUrl={project.image}
                        releaseLink={project.releaseLink}
                        sourcesLink={project.sourcesLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects_Section;