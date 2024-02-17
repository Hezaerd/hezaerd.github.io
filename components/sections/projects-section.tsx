import React, { useState, useRef } from "react";
import ProjectCard from "../projects/project-card";
import ProjectTag from "../projects/project-tag";
import { motion, useInView } from "framer-motion";

const ProjectData = [
    {
        id: 1,
        name: "BirdMancer",
        description: "Tech art project trying to push Niagara to its limits",
        tag: ["All", "Isart"],
        image: "/images/projects/birdmancer.gif",
        releaseLink: "https://github.com/Hezaerd/BirdMancer/releases/tag/v1.0.0",
        sourcesLink: "https://github.com/Hezaerd/BirdMancer",
    },
    {
        id: 2,
        name: "CoorsLight Engine",
        description: "Graduation project at Isart Digital Montréal",
        tag: ["All", "C++", "Isart"],
        image: "/images/projects/coorslight.png",
        releaseLink: "#",
        sourcesLink: "https://github.com/gabrielboisvert/CoorsLightEngine",
    },
    {
        id: 3,
        name: "HezMaths",
        description: "Collection of mathemathical tools for rendering",
        tag: ["All", "C++", "Hez"],
        image: "/images/projects/hezmaths.png",
        releaseLink: "#",
        sourcesLink: "https://github.com/Hezaerd/HezMaths",
    },
    {
        id: 4,
        name: "HezAudio",
        description: "An audio library based on OpenAL",
        tag: ["All", "C++", "Hez"],
        image: "/images/projects/hezaudio.png",
        releaseLink: "#",
        sourcesLink: "https://github.com/Hezaerd/HezAudio",
    },
    {
        id: 5,
        name: "Coloris",
        description: "4 days GameJam 2.5D platformer game",
        tag: ["All", "C#", "Isart"],
        image: "/images/projects/coloris.png",
        releaseLink: "#",
        sourcesLink: "https://github.com/Hezaerd/Coloris",
    },
    {
        id: 6,
        name: "Nautikart",
        description: "Mario Kart like racing game but underwater",
        tag: ["All", "C++", "Isart"],
        image: "/images/projects/nautikart.png",
        releaseLink: "https://github.com/BreizhBienv/NautiKart/releases/tag/v1.0.0",
        sourcesLink: "https://github.com/BreizhBienv/NautiKart",
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
        name: "Hez",
    },
    {
        id: 5,
        name: "Isart",
    }
];

const Projects_Section = () => {
    const [currentTag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const filterProjects = ProjectData.filter((project) => 
        project.tag.includes(currentTag)
    );

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
    };

    return (
        <section 
        ref={ref}
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
            <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filterProjects.map((project, index) => (
                    <motion.li
                        key={project.id}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.25 }}
                    >
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            description={project.description}
                            imgUrl={project.image}
                            releaseLink={project.releaseLink}
                            sourcesLink={project.sourcesLink}
                            />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Projects_Section;