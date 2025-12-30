import { notFound } from "next/navigation";
import { getAllBlogs } from "@/lib/blogs";
import Link from "next/link";

export const dynamicParams = true;

/* ✅ STATIC PATHS */
export async function generateStaticParams() {
    return getAllBlogs().map(blog => ({
        slug: blog.slug,
    }));
}

/* ✅ SEO METADATA */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const blog = getAllBlogs().find(b => b.slug === slug);

    if (!blog) return {};

    return {
        title: `${blog.title} | Compress Image Pro`,
        description: blog.excerpt,
    };
}

/* ✅ PAGE COMPONENT */
export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const blog = getAllBlogs().find(b => b.slug === slug);

    if (!blog) notFound();

    return (
        <div className="max-w-5xl mx-auto p-6 blog-detail">
            <Link href="/blog" className="text-blue-600">← Back</Link>

            <h1 className="font-bold mt-4 mb-5">{blog.title}</h1>
            <p className="text-s font-bold text-gray-500 mb-6">
                {blog.date} • {blog.author}
            </p>
            <div className="feature-img mb-9">
                <img
                    src={blog.featureImage}
                    alt={blog.title}
                    className="rounded-2xl w-full h-48 object-cover rounded-xl"
                />
            </div>
            <div
                className="content prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </div>
    );
}
