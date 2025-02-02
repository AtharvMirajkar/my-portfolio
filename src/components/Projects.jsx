const projects = [
  {
    title: "Job Diary",
    description:
      "A job tracking app using the MERN stack, helping users manage job applications efficiently.",
    image:
      "https://img.freepik.com/free-vector/online-job-interview_23-2148644500.jpg?ga=GA1.1.657285535.1704450861&semt=ais_hybrid",
    link: "#",
  },
  //   {
  //     title: "E-commerce App",
  //     description:
  //       "An online shopping platform built with React, Firebase, and Stripe for payments.",
  //     image: "https://source.unsplash.com/400x250/?ecommerce,shopping",
  //     link: "#",
  //   },
  {
    title: "School ERP System",
    description:
      "A complete school management solution built with the MERN stack, including student & teacher dashboards.",
    image:
      "https://img.freepik.com/free-vector/online-job-interview_23-2148613123.jpg?t=st=1740918638~exp=1740922238~hmac=c6ce8ff7d6b0c8f2074dc9f1a14329ed5f4dff2d74febf541d29f9ec8f2031a2&w=1060",
    link: "#",
  },
  {
    title: "Loan Management App",
    description:
      "A React Native & Node.js app that helps users apply for and manage loans securely.",
    image:
      "https://img.freepik.com/free-vector/premium-cash-reward-bonus-work-done-best-employee-rewarding-promotion-order-efficiency-stimulation-boss-subordinate-cartoon-characters_335657-2984.jpg?t=st=1740918562~exp=1740922162~hmac=8968b7f3cfd0224463e133f7261cb6fdba61cd7d7b939af0008f9ee0f32ee14a&w=740",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-purple-700">
        My Projects
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mt-2">
        Here are some of the projects I have worked on using the MERN stack and
        React Native.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-700">
                {project.title}
              </h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-white bg-purple-700 px-4 py-2 rounded-lg shadow-md hover:bg-purple-800"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
