import { getDb } from "@/lib/mongodb";

type Blog = {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  createdAt?: string | Date;
};

async function getBlogs(): Promise<Blog[]> {
  const db = await getDb();
  const collection = db.collection("blogs");

  const blogs = await collection
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return blogs.map((blog) => ({
    _id: blog._id.toString(),
    title: blog.title as string,
    excerpt: blog.excerpt as string,
    content: blog.content as string,
    createdAt: blog.createdAt as Date | string | undefined,
  }));
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
      <p className="text-gray-600 mb-10">
        Browse all published articles. The most recent posts appear first.
      </p>

      {blogs.length === 0 ? (
        <p className="text-gray-500">No blog posts have been published yet.</p>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog) => (
            <article
              key={blog._id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                {blog.createdAt && (
                  <p className="text-xs text-gray-400">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

