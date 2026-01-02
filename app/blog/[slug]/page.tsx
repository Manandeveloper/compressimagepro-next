import { notFound } from "next/navigation";
import { getAllBlogs } from "@/lib/blogs";
import Link from "next/link";
import { getNextPrevBlog } from "@/lib/getNextPrevPost";
export const dynamicParams = true;
import type { Metadata } from "next";

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
}): Promise<Metadata> {
    const { slug } = await params;

    const blog = getAllBlogs().find(b => b.slug === slug);

    if (!blog) return {};
    const canonicalUrl = `https://compressimagepro.com/blog/${slug}`;
    return {
        title: blog.metaTitle ?? blog.title,
        description: blog.metaDescription ?? blog.excerpt,
        keywords: blog.metaKeywords,

        alternates: {
            canonical: canonicalUrl,
        },

        openGraph: {
            title: blog.metaTitle ?? blog.title,
            description: blog.metaDescription ?? blog.excerpt,
            url: canonicalUrl,
            type: "article",
            images: [
                {
                    url: blog.featureImage,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: blog.metaTitle ?? blog.title,
            description: blog.metaDescription ?? blog.excerpt,
            images: [blog.featureImage],
        },
    };
}

/* ✅ PAGE COMPONENT */
export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const blogs = getAllBlogs();
    const blog = blogs.find(b => b.slug === slug);

    if (!blog) notFound();

    const { prev, next } = getNextPrevBlog(slug);

    return (
        <div className="max-w-5xl mx-auto p-6 blog-detail">
            {/* <Link href="/blog" className="text-blue-600">← Back</Link> */}
            <nav
                aria-label="Breadcrumb"
                className="text-sm text-gray-500 mb-4"
            >
                <ol className="flex flex-wrap gap-1">
                    <li>
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <span className="mx-1">/</span>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:underline">
                            Blog
                        </Link>
                        <span className="mx-1">/</span>
                    </li>
                    <li
                        aria-current="page"
                        className="text-gray-700 font-medium"
                    >
                        {blog.title}
                    </li>
                </ol>
            </nav>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: "https://compressimage.pro/",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Blog",
                                item: "https://compressimage.pro/blog",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: blog.title,
                                item: `https://compressimage.pro/blog/${blog.slug}`,
                            },
                        ],
                    }),
                }}
            />
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
            <nav
                aria-label="Blog navigation"
                className="blog-nav mt-16 flex justify-between border-t pt-8"
            >
                {prev ? (
                    <div className="link-wrap">
                        <img
                            src={prev.featureImage}
                            alt={prev.title}
                        />
                        <p className="nav-title">{prev.title}</p>
                        <Link
                            href={`/blog/${prev.slug}`}
                            rel="prev"
                            className="max-w-[45%] text-left"
                        >
                        </Link>

                    </div>
                ) : <span />}

                {next && (
                    <div className="link-wrap">
                        <img
                            src={next.featureImage}
                            alt={next.title}
                        />
                        <p className="nav-title">{next.title}</p>
                        <Link
                            href={`/blog/${next.slug}`}
                            rel="next"
                            className="max-w-[45%] text-right"
                        >
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
}
