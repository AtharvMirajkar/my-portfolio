const Contact = () => {
  return (
    <section className="py-20 text-center bg-gray-100">
      <h2 className="text-3xl font-bold text-purple-700">Contact Me</h2>
      <p className="text-gray-600 mt-4">
        Feel free to reach out to me for collaborations or job opportunities.
      </p>
      <form className="max-w-lg mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg"
        ></textarea>
        <button className="w-full mt-4 bg-purple-700 text-white py-3 rounded-lg">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
