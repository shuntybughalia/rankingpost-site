export default function ArticlePage() {
  return (
    <>
      {/* Article Section */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Category */}
        <p className="text-indigo-600 font-semibold mb-4">Technology</p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Building a Modern Blog with Next.js and Tailwind CSS
        </h1>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-indigo-200 rounded-full"></div>
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-gray-500 text-sm">Published on Feb 24, 2026 · 5 min read</p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full h-80 bg-indigo-200 rounded-2xl mb-10"></div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <p>
            Creating a modern blog platform has never been easier thanks to
            powerful frameworks like Next.js and utility-first CSS libraries
            like Tailwind CSS. Together, they allow developers to build
            lightning-fast, scalable, and beautiful web applications.
          </p>

          <h2>Why Choose Next.js?</h2>
          <p>
            Next.js provides server-side rendering, static site generation,
            and API routes out of the box. This makes it perfect for building
            SEO-friendly blogs and content-driven platforms.
          </p>

          <h2>Styling with Tailwind CSS</h2>
          <p>
            Tailwind CSS speeds up development by providing utility classes
            that let you style directly in your markup. No more switching
            between CSS files and components.
          </p>

          <blockquote>
            "The combination of Next.js and Tailwind CSS creates a powerful
            developer experience that is both productive and enjoyable."
          </blockquote>

          <h2>Final Thoughts</h2>
          <p>
            Whether you're building a personal blog or a large-scale content
            platform, using modern tools will help you deliver a fast and
            engaging user experience.
          </p>
        </article>
      </main>

      {/* Comments Section */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-8">Comments</h3>

          {/* Comment Form */}
          <div className="mb-10">
            <textarea
              placeholder="Write your comment..."
              className="w-full border rounded-xl p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
            ></textarea>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
              Post Comment
            </button>
          </div>

          {/* Comment List */}
          {[1, 2].map((comment) => (
            <div key={comment} className="flex gap-4 mb-8">
              <div className="w-10 h-10 bg-indigo-200 rounded-full"></div>
              <div>
                <p className="font-semibold">User {comment}</p>
                <p className="text-gray-600 text-sm mb-2">This is a sample comment for the article.</p>
                <button className="text-indigo-600 text-sm hover:underline">Reply</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} NextBlog. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
