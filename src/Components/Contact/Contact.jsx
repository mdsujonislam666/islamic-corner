const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("JazakAllahu Khairan! We will contact you soon.");
  };

  return (
    <section className="min-h-screen bg-amber-200 text-white px-6 py-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500">
          Contact Us
        </h1>
        <p className="mt-4 italic text-lg text-black">
          Your questions matter; we are here with sincerity, faith, and dedication to assist you
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto rounded-xl grid md:grid-cols-2 gap-10 bg-gradient-to-r from-indigo-500 via-sky-300 to-violet-500">
        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-amber-300 mb-4">
            Islamic Corner
          </h2>
          <p className="leading-relaxed text-gray-200">
            We are here to assist you with authentic Islamic products.
            Please feel free to contact us for any inquiries.
          </p>

          <ul className="mt-6 space-y-3 text-gray-200">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 1601672349</li>
            <li>📧 mdsujon.islam21161@gmail.com</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-8 text-gray-800 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6">
            Send a Message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full mb-4 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full mb-4 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="w-full mb-6 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
