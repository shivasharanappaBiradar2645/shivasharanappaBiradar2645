import { useEffect, useState } from "react";

const HackathonTimeline = () => {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch("/hackathons.json")
      .then((res) => res.json())
      .then(setItems)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6" id="">
      <h2 className="text-3xl font-bold mb-10  text-center">Hackathons </h2>

      {/* --- LARGE SCREEN TIMELINE --- */}
      <div className="hidden sm:block relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-600 z-0" />

        <div className="space-y-12">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id} className="relative w-full flex justify-center">
                <div
                  className={`absolute top-0 w-1/2 ${
                    isLeft ? "left-0 text-right pr-6" : "right-0 text-left pl-6"
                  }`}
                >
                  <button
                    onClick={() => setActive(item)}
                    className="bg-primary text-white px-4 py-2 rounded shadow hover:shadow-lg hover:bg-primary-focus hover:scale-105 transition transform duration-300 text-base"
                  >
                    {item.title}
                  </button>
                </div>

                <div className="z-10 w-4 h-4 rounded-full bg-white border-2 border-gray-800 mx-auto mt-2"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- MOBILE SIMPLE LIST --- */}
      <div className="sm:hidden flex flex-col space-y-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item)}
            className="bg-primary text-white px-4 py-2 rounded shadow hover:shadow-lg hover:bg-primary-focus hover:scale-105 transition transform duration-300 text-base text-center"
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* --- MODAL --- */}
      {active && (
        <div
          className="modal modal-open modal-bottom sm:modal-middle"
          onClick={(e) => {
            if (e.target.classList.contains("modal")) setActive(null); // click outside to close
          }}
        >
          <div className="modal-box max-w-4xl p-8 rounded-lg relative">
            {/* Close X */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold"
              onClick={() => setActive(null)}
            >
              &times;
            </button>

            <h3 className="font-bold text-2xl mb-2">{active.title}</h3>
            <p className="text-gray-400 text-lg mb-4">{active.role}</p>
            <p className="mb-4">{active.summary}</p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              {active.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            {active.links?.repo && (
              <a
                href={active.links.repo}
                target="_blank"
                rel="noreferrer"
                className="link link-primary inline-flex items-center gap-2 mb-4 text-lg hover:text-blue-400"
              >
                <i className="bx bxl-github"></i> GitHub Repository
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HackathonTimeline;
