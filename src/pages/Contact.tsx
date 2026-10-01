const Contact = () => {
  return (
    <section className="min-h-screen px-6 lg:px-20 py-20 flex flex-col justify-start max-w-6xl mx-auto text-black">
      <header>
        <h3 className="inline-flex items-center gap-2 border border-gray-600 rounded-2xl px-5 py-2 text-xs w-fit uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></span>
          CONTACT
        </h3>
        <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Let's Work            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Together!</span>
        </h1>
      </header>

      <form className="mt-12 w-full max-w-2xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label htmlFor="firstname" className="md:w-32 text-lg md:text-xl">
            Firstname:
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="First name"
            className="bg-transparent border-b border-gray-500 flex-1 outline-none py-2 px-3 placeholder-gray-400"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label htmlFor="email" className="md:w-32 text-lg md:text-xl">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@gmail.com"
            className="bg-transparent border-b border-gray-500 flex-1 outline-none py-2 px-3 placeholder-gray-400"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label htmlFor="contact" className="md:w-32 text-lg md:text-xl">
            Contact:
          </label>
          <input
            id="contact"
            type="text"
            placeholder="Phone number"
            className="bg-transparent border-b border-gray-500 flex-1 outline-none py-2 px-3 placeholder-gray-400"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <label htmlFor="message" className="md:w-32 text-lg md:text-xl pt-2 md:pt-0">
            Message:
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Your message..."
            className="bg-transparent border border-gray-600 rounded-md p-4 flex-1 outline-none resize-none placeholder-gray-400"
          />
        </div>

        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-purple-500 text-white font-semibold px-8 py-3 rounded-3xl shadow-lg hover:bg-purple-400 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
