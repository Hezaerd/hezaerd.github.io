import React, { useState, useRef } from "react";
import ProjectCard from "../projects/project-card";
import ProjectTag from "../projects/project-tag";
import Projects from "@/public/projects/projects.json";
import Tags from "@/public/projects/tags.json";
import { motion, useInView } from "framer-motion";

const Projects_Section = () => {
    const [currentTag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const filterProjects = Projects.filter((project) => 
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