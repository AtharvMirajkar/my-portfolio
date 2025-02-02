import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          Hi, I'm <span className="text-purple-900">Atharv Mirajkar</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Full Stack Developer | MERN Stack Enthusiast 🚀
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Passionate about building dynamic and responsive web & mobile
          applications. Experienced in{" "}
          <span className="font-semibold">
            React.js, Node.js, Express, MongoDB, and React Native
          </span>
          . Always eager to explore new technologies and craft seamless digital
          experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/projects"
            className="px-6 py-3 bg-purple-700 hover:bg-purple-900 transition text-white font-medium rounded-lg shadow-lg"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-900 transition text-white font-medium rounded-lg shadow-lg"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
