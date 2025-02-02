const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 flex flex-col items-center text-center">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-4">
          About Me
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          I'm{" "}
          <span className="font-semibold text-purple-900">Atharv Mirajkar</span>
          , a passionate
          <span className="text-purple-900 font-semibold">
            {" "}
            Full Stack Developer
          </span>{" "}
          with expertise in modern web and mobile technologies. I specialize in
          the{" "}
          <span className="font-semibold">
            MERN Stack (MongoDB, Express.js, React, Node.js)
          </span>{" "}
          and have hands-on experience with
          <span className="font-semibold"> React Native</span> for mobile
          development.
        </p>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg text-left">
          <h3 className="text-2xl font-bold text-purple-700 mb-3">
            Education 🎓
          </h3>
          <p className="text-gray-700">
            I hold a{" "}
            <span className="font-semibold">
              B.Tech in Computer Science and Engineering
            </span>
            , graduating with a{" "}
            <span className="font-semibold">CGPA of 8.08</span>. My academic
            background has strengthened my problem-solving skills and deepened
            my understanding of software development.
          </p>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg text-left">
          <h3 className="text-2xl font-bold text-purple-700 mb-3">
            Skills & Expertise 💡
          </h3>
          <p className="text-gray-700">
            Over the years, I have developed and deployed multiple projects
            using:
          </p>
          <ul className="mt-3 text-gray-800 list-disc list-inside">
            <li>Frontend: React.js, Next.js, Tailwind CSS, Material UI</li>
            <li>Backend: Node.js, Express.js, REST APIs</li>
            <li>Database: MongoDB, Firebase</li>
            <li>Mobile Development: React Native</li>
            <li>Version Control & Deployment: Git, GitHub, Vercel, Firebase</li>
          </ul>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg text-left">
          <h3 className="text-2xl font-bold text-purple-700 mb-3">
            Projects & Experience 🚀
          </h3>
          <p className="text-gray-700">
            I have built and contributed to numerous projects, including:
          </p>
          <ul className="mt-3 text-gray-800 list-disc list-inside">
            <li>
              Developed a{" "}
              <span className="font-semibold">Job Diary Application</span> to
              track job applications with CRUD operations.
            </li>
            <li>
              Worked on{" "}
              <span className="font-semibold">React Native mobile apps</span>{" "}
              for e-commerce and productivity.
            </li>
            <li>
              Created a <span className="font-semibold">portfolio website</span>{" "}
              showcasing my projects and skills.
            </li>
            <li>
              Contributed to open-source projects and collaborated with teams on
              GitHub.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <p className="text-lg text-gray-800">
            I'm always excited to work on new projects and learn emerging
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
