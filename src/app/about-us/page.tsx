export default function AboutUsPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About Our Story
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            We are passionate about sharing knowledge, ideas, and inspiration
            through modern web technologies.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-gray-600 mb-4">
            Our mission is to empower creators and readers by building a
            platform that makes publishing and discovering content simple,
            beautiful, and accessible to everyone.
          </p>
          <p className="text-gray-600">
            Built with Next.js and Tailwind CSS, our blog platform focuses on
            speed, performance, and user experience.
          </p>
        </div>
        <div className="h-80 bg-indigo-200 rounded-2xl shadow-lg"></div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                desc: "We embrace modern technologies to deliver the best digital experience.",
              },
              {
                title: "Community",
                desc: "We believe in building a strong community of writers and readers.",
              },
              {
                title: "Quality",
                desc: "We focus on high-quality content that informs and inspires.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h4 className="text-xl font-semibold mb-4 text-indigo-600">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Meet Our Team</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((member) => (
            <div
              key={member}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="w-24 h-24 mx-auto bg-indigo-200 rounded-full mb-4"></div>
              <h4 className="text-xl font-semibold">Team Member {member}</h4>
              <p className="text-gray-500 mb-2">Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Passionate about technology and building meaningful digital
                experiences.
              </p>
            </div>
          ))}
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
