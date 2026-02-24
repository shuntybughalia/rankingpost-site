export default function ContactPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Have questions, suggestions, or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
          <p className="text-gray-600 mb-6">
            Feel free to reach out through the form or via the details below.
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">contact@nextblog.com</p>
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-gray-600">123 Blog Street, Web City, USA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} NextBlog. All rights reserved.</p>
        </div>
      </footer>
   </>
  );
}
