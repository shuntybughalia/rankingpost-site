export default function Home() {
  return (
   <>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Discover Stories & Ideas
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            A modern blog platform built with Next.js and Tailwind CSS.
            Read, write, and explore amazing content.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-12 text-center">Featured Articles</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((post) => (
            <div
              key={post}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-48 bg-indigo-200"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">
                  Blog Post Title {post}
                </h4>
                <p className="text-gray-600 mb-4">
                  This is a short description of the blog post. It gives readers a quick preview of the content.
                </p>
                <button className="text-indigo-600 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Browse by Category</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Technology', 'Design', 'Startup', 'Lifestyle', 'Programming'].map((category) => (
              <span
                key={category}
                className="px-6 py-3 bg-white rounded-full shadow hover:bg-indigo-600 hover:text-white transition cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-6">Subscribe to our Newsletter</h3>
          <p className="text-gray-600 mb-8">
            Get the latest articles and insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-auto"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </div>
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
