function Contact(){
    return(
       <>
  <section className="bg-white dark:bg-gray-900 py-16">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Contact Us
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thanks for your Data we heal you soon...');
        }}
        className="space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            placeholder="What is this about?"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Your message..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
</>

    )
}
export default Contact