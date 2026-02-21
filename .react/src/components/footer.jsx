const Footer = () => {
  return (
    <footer id="contact" className=" py-8 mt-12">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:shivasharanappabiradar@outlook.com"
            className="text-blue-400 hover:text-blue-600 transition"
          >
           shivasharanappabiradar@outlook.com
          </a>
        </p>

        <div className="flex gap-6 mt-2">
          <a
            href="https://www.linkedin.com/in/shivasharanappa-biradar-13a641291/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-blue-600 transition transform hover:scale-110"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/shivasharanappaBiradar2645"
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-gray-400 transition transform hover:scale-110"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <p className="text-gray-500 mt-4 text-sm">
          &copy; {new Date().getFullYear()} Shivasharanappa Biradar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
