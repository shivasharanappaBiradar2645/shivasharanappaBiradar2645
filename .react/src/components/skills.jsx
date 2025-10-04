import  { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json") 
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="p-8  rounded-md flex flex-col m-4 justify-center items-center">
      <h2 className="text-2xl font-bold mb-4 ">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="badge flex items-center gap-2 text-white"
            style={{ backgroundColor: skill.color }}
          >
            <i className={`${skill.icon} text-white w-4 h-4`}></i>
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;