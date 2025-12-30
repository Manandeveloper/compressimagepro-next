import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";

export const metadata = {
    title: "Blog | Compress Image Pro",
    description: "Image optimization tips, guides, and performance insights.",
};

export default function BlogPage() {
    const blogs = getAllBlogs();

    return (
        <div className="max-w-5xl mx-auto p-6 blog-list">
            <h1 className="mb-9">Blog</h1>
            <ul className="grid gap-6">
                {blogs.map(blog => (
                    <li
                        key={blog.slug}
                        className="border rounded-2xl p-6 shadow-sm hover:shadow-md "
                    >
                        <div className="img-wrap mb-5">
                            <img
                                src={blog.featureImage}
                                alt={blog.title}
                                className="rounded-2xl w-full h-48 object-cover rounded-xl"
                            />
                        </div>
                        <h2 className="blog-title text-xl font-semibold mb-2">{blog.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">
                            {blog.date} • {blog.author}
                        </p>
                        <Link
                            href={`/blog/${blog.id}`}
                            className="text-blue-600 font-medium"
                        >
                            Read More →
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
