import React from "react";
import Heading from "../heading/Heading";
import "./skills.css";

const Skills = () => {
  const skills = {
    title_first: "skill",
    title_last: "-ek",
    col1: [
      {
        title: "HTML 5",
        progress: "78%",
      },
      {
        title: "CSS",
        progress: "72%",
      },
      {
        title: "JavaScript",
        progress: "66%",
      },
      {
        title: "JQuery",
        progress: "26%",
      },
      {
        title: "React",
        progress: "57%",
      },
      {
        title: "Redux",
        progress: "35%",
      },
      {
        title: "Node js",
        progress: "28%",
      },
      {
        title: "Sql",
        progress: "33%",
      },
      {
        title: "Photoshop",
        progress: "28%",
      },
      {
        title: "Figma",
        progress: "42%",
      },
      {
        title: "Java",
        progress: "4%",
      },
      {
        title: "Spring Boot",
        progress: "2%",
      },
      {
        title: "PHP",
        progress: "18%",
      },
    ],
  };
  return (
    <section className="progress">
      <Heading heading={skills} />
      {skills.col1.map((skill, index) => (
        <div key={index}>
          <h5>
            {skill.title}
            <span>{skill.progress}</span>
          </h5>
          <div className="bar">
            <span style={{ width: `${skill.progress}` }}></span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
