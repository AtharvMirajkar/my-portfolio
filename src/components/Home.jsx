import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-blue-300 to-purple-400 animate-gradient"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute w-20 h-20 bg-white opacity-20 rounded-full top-10 left-20 animate-float"></div>
        <div className="absolute w-14 h-14 bg-white opacity-25 rounded-full bottom-20 right-40 animate-float-reverse"></div>
        <div className="absolute w-24 h-24 bg-white opacity-15 rounded-full bottom-10 left-10 animate-float"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl z-10"
      >
        <h1 className="text-5xl font-extrabold text-purple-900 drop-shadow-lg mb-4">
          Hi, I'm <span className="text-gray-900">Atharv Mirajkar</span>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 justify-center"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
