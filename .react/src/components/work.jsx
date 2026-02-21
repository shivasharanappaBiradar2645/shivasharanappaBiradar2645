import { useEffect, useState } from "react";

const WorkExperience = () => {
  const [work, setWork] = useState([]);

  useEffect(() => {
    fetch("/works.json")
      .then((res) => res.json())
      .then(setWork)
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="work" className="p-8 rounded-md flex flex-col m-4 justify-center items-center">
      <h2 className="text-2xl font-bold mb-6  text-center">
        Work Experience
      </h2>
      <div className="flex flex-col w-full max-w-3xl gap-6">
        {work.map((job, i) => (
          <div
            key={i}
            className="card bg-base-200  p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-1">{job.company}</h3>
            <p className="role font-medium text-gray-300 mb-1">{job.role}</p>
            <p className="dates text-gray-400 mb-3">{job.dates}</p>
            <ul className="list-disc list-inside space-y-1">
              {job.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
