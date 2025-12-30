import { getAllBlogs } from "@/lib/blogs";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://compressimagepro.com";

    const staticRoutes = [
        "",
        "/image-compress",
        "/image-resize",
        "/image-crop",
        "/image-watermark",
        "/remove-background",
        "/change-background",
        "/image-convert",
        "/rotate-image",
        "/blog",
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.9,
    }));

    const blogRoutes = getAllBlogs().map(blog => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticRoutes, ...blogRoutes];
}
