import { useEffect, useState } from "react";

const PersonalProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then(setProjects)
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="p-8 rounded-md flex flex-col m-4 justify-center items-center">
      <h2 className="text-2xl font-bold mb-6  text-center">
        Personal Projects
      </h2>
      <div className="flex flex-col w-full max-w-3xl gap-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="card bg-base-200 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-4">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2   font-medium"
            >
              GitHub Repository <i className="bx bxl-github"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalProjects;
