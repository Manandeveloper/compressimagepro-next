import { getAllBlogs } from "@/lib/blogs";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://compressimagepro.com";

    const staticRoutes: MetadataRoute.Sitemap = [
        "",
        "/image-compress",
        "/image-resize",
        "/image-crop",
        "/image-watermark",
        "/image-convert",
        "/rotate-image",
        "/blog",
    ].map((route): MetadataRoute.Sitemap[number] => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.9,
    }));

    const blogRoutes: MetadataRoute.Sitemap = getAllBlogs().map(
        (blog): MetadataRoute.Sitemap[number] => ({
            url: `${baseUrl}/blog/${blog.slug}`,
            lastModified: new Date(blog.date),
            changeFrequency: "monthly",
            priority: 0.8,
        })
    );

    return [...staticRoutes, ...blogRoutes];
}
