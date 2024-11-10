import React from 'react';
import '../css/skills.css'; // Make sure this path matches your project structure

const skills = () => {
    const frontendSkills = [
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "85%" },
        { name: "JavaScript", level: "75%" },
        { name: "React", level: "70%" }
    ];

    const backendSkills = [
        { name: "Node.js", level: "65%" },
        { name: ".NET", level: "60%" },
        { name: "MongoDB", level: "55%" },
        { name: "MySQL", level: "70%" }
    ];

    return (
        <div className="skillsContainer">
            <div className="skillsTopic">
                <h1 className="skillsTopicA">Skills</h1>
            </div>
            <div className="skillsSection">
                <div className="frontendSkills">
                    <h2 className="skillsTitle">Frontend Skills</h2>
                    <div className="skillsList">
                        {frontendSkills.map((skill, index) => (
                            <div key={index} className="skill">
                                <div className="skillRow">
                                    <div className="skillName">{skill.name}</div>
                                    <div className="skillLevel">{skill.level}</div>
                                </div>
                                <div className="progressBar">
                                    <div className="progress" style={{ width: skill.level }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="backendSkills">
                    <h2 className="skillsTitle">Backend Skills</h2>
                    <div className="skillsList">
                        {backendSkills.map((skill, index) => (
                            <div key={index} className="skill">
                                <div className="skillRow">
                                    <div className="skillName">{skill.name}</div>
                                    <div className="skillLevel">{skill.level}</div>
                                </div>
                                <div className="progressBar">
                                    <div className="progress" style={{ width: skill.level }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default skills;
